import { RuleSet } from "../../../../Debugging/RuleSet";
import { ScriptKind } from "../../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../../Debugging/Suites/RuleSuite";
import { ICodeSnippetCollection } from "../../../../Debugging/TestCases/ICodeSnippet";
import { Accessor } from "./Accessor";
import { ContainerType } from "./ContainerType";
import { MemberType } from "./MemberType";
import { Modifier } from "./Modifier";
import { SourceCodeCreator } from "./SourceCodeCreator";

let signatureMembers = [
    MemberType.Field,
    MemberType.Method
];

let accessorMembers = [
    ...signatureMembers,
    MemberType.Constructor
];

export let MemberOrdering = new RuleSuite(
    "@typescript-eslint/member-ordering",
    [
        {
            Description: "Checking whether member-types must be ordered correctly…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [ContainerType.Class, ContainerType.Interface, ContainerType.Type].flatMap(
                (containerType): ICodeSnippetCollection[] =>
                {
                    return [
                        {
                            Valid: false,
                            Snippets: [
                                SourceCodeCreator.TestTypes(containerType, MemberType.Constructor, MemberType.Field),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Signature, MemberType.Field),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Method, MemberType.Field),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Signature, MemberType.Constructor),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Method, MemberType.Constructor),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Method, MemberType.Signature)
                            ]
                        },
                        {
                            Valid: true,
                            Snippets: [
                                SourceCodeCreator.TestTypes(containerType, MemberType.Field, MemberType.Constructor),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Field, MemberType.Signature),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Field, MemberType.Method),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Constructor, MemberType.Signature),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Constructor, MemberType.Method),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Signature, MemberType.Method)
                            ]
                        }
                    ];
                })
        },
        {
            Description: "Checking whether members of the same type must be ordered by their accessor…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: accessorMembers.flatMap(
                (memberType): ICodeSnippetCollection[] =>
                {
                    return [
                        {
                            Valid: false,
                            Snippets: [
                                SourceCodeCreator.TestAccessors(memberType, Accessor.Protected, Accessor.Public),
                                SourceCodeCreator.TestAccessors(memberType, Accessor.Private, Accessor.Public),
                                SourceCodeCreator.TestAccessors(memberType, Accessor.Private, Accessor.Protected)
                            ]
                        },
                        {
                            Valid: true,
                            Snippets: [
                                SourceCodeCreator.TestAccessors(memberType, Accessor.Public, Accessor.Protected),
                                SourceCodeCreator.TestAccessors(memberType, Accessor.Public, Accessor.Private),
                                SourceCodeCreator.TestAccessors(memberType, Accessor.Protected, Accessor.Private)
                            ]
                        }
                    ];
                })
        },
        {
            Description: "Checking whether members of the same type must be ordered by their modifier…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: signatureMembers.flatMap(
                (memberType): ICodeSnippetCollection[] =>
                {
                    return [
                        {
                            Valid: false,
                            Snippets: [
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Instance, Modifier.Static),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Abstract, Modifier.Static),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Abstract, Modifier.Instance)
                            ]
                        },
                        {
                            Valid: true,
                            Snippets: [
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Static, Modifier.Instance),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Static, Modifier.Abstract),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Instance, Modifier.Abstract)
                            ]
                        }
                    ];
                })
        },
        {
            Description: "Checking whether the modifier-order has a higher priority than the accessor-order…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: signatureMembers.flatMap(
                (memberType): ICodeSnippetCollection[] =>
                {
                    return [
                        {
                            Valid: false,
                            Snippets: [
                                SourceCodeCreator.TestSignature(
                                    memberType,
                                    [Accessor.Public, Modifier.Static],
                                    [Accessor.Public, Modifier.Instance],
                                    [Accessor.Protected, Modifier.Static])
                            ]
                        },
                        {
                            Valid: true,
                            Snippets: [
                                SourceCodeCreator.TestSignature(
                                    memberType,
                                    [Accessor.Public, Modifier.Static],
                                    [Accessor.Protected, Modifier.Static],
                                    [Accessor.Public, Modifier.Instance])
                            ]
                        }
                    ];
                })
        }
    ]);
