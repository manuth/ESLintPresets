import { Accessor } from "./Accessor.js";
import { ContainerType } from "./ContainerType.js";
import { MemberType } from "./MemberType.js";
import { Modifier } from "./Modifier.js";
import { SourceCodeCreator } from "./SourceCodeCreator.js";
import { ESLintRule } from "../../../../../ESLintRule.cjs";
import { RuleSet } from "../../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../../Debugging/Suites/RuleSuite.js";
import { ICodeSnippetCollection } from "../../../../Debugging/TestCases/ICodeSnippet.js";

let signatureMembers = [
    MemberType.Field,
    MemberType.Method
];

let accessorMembers = [
    ...signatureMembers,
    MemberType.Constructor
];

/**
 * Provides tests for the {@link ESLintRule.TypeScriptMemberOrdering `TypeScriptMemberOrdering`} rule.
 */
export let MemberOrdering = new RuleSuite(
    ESLintRule.TypeScriptMemberOrdering,
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
                                SourceCodeCreator.TestTypes(containerType, MemberType.Indexer, MemberType.Field),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Method, MemberType.Field),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Indexer, MemberType.Constructor),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Method, MemberType.Constructor),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Method, MemberType.Indexer)
                            ]
                        },
                        {
                            Valid: true,
                            Snippets: [
                                SourceCodeCreator.TestTypes(containerType, MemberType.Field, MemberType.Constructor),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Field, MemberType.Indexer),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Field, MemberType.Method),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Constructor, MemberType.Indexer),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Constructor, MemberType.Method),
                                SourceCodeCreator.TestTypes(containerType, MemberType.Indexer, MemberType.Method)
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
            Description: "Checking whether static members must be placed before members of the same type and accessor…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: signatureMembers.flatMap(
                        (memberType) =>
                        {
                            return [
                                SourceCodeCreator.TestSignature(
                                    memberType,
                                    [Accessor.Public, Modifier.Instance],
                                    [Accessor.Public, Modifier.Static]),
                                SourceCodeCreator.TestSignature(
                                    memberType,
                                    [Accessor.Public, Modifier.Abstract],
                                    [Accessor.Public, Modifier.Static]),
                                SourceCodeCreator.TestSignature(
                                    memberType,
                                    [Accessor.Protected, Modifier.Static],
                                    [Accessor.Public, Modifier.Instance])
                            ];
                        })
                },
                {
                    Valid: true,
                    Snippets: signatureMembers.flatMap(
                        (memberType) =>
                        {
                            return [
                                SourceCodeCreator.TestSignature(
                                    memberType,
                                    [Accessor.Public, Modifier.Static],
                                    [Accessor.Public, Modifier.Instance],
                                    [Accessor.Protected, Modifier.Static],
                                    [Accessor.Protected, Modifier.Instance])
                            ];
                        })
                }
            ]
        },
        {
            Description: "Checking whether the order of non-static members is irrelevant…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: signatureMembers.flatMap(
                (memberType): ICodeSnippetCollection[] =>
                {
                    return [
                        {
                            Valid: false,
                            Snippets: [
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Abstract, Modifier.Static),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Instance, Modifier.Static)
                            ]
                        },
                        {
                            Valid: true,
                            Snippets: [
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Static, Modifier.Instance),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Static, Modifier.Abstract),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Instance, Modifier.Abstract),
                                SourceCodeCreator.TestModifiers(memberType, Modifier.Abstract, Modifier.Instance)
                            ]
                        }
                    ];
                })
        }
    ]);
