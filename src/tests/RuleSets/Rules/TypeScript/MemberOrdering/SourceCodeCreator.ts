import { EOL } from "os";
import { Accessor } from "./Accessor";
import { ContainerType } from "./ContainerType";
import { MemberDefinition } from "./MemberDefinition";
import { MemberType } from "./MemberType";
import { Modifier } from "./Modifier";

/**
 * Provides the functionality to create source-code.
 */
export class SourceCodeCreator
{
    /**
     * The default accessor.
     */
    private static defaultAccessor = Accessor.Public;

    /**
     * The default modifier.
     */
    private static defaultModifier = Modifier.Instance;

    /**
     * Generates test-code for two member-types.
     *
     * @param containerType
     * The type of the container.
     *
     * @param firstType
     * The first member-type.
     *
     * @param secondType
     * The second member-type.
     *
     * @returns
     * The generated code.
     */
    public static TestTypes(containerType: ContainerType, firstType: MemberType, secondType: MemberType): string
    {
        return this.GetContainerCode(
            containerType,
            [this.defaultAccessor, this.defaultModifier, firstType],
            [this.defaultAccessor, this.defaultModifier, secondType]);
    }

    /**
     * Generates test-code for two accessors.
     *
     * @param memberType
     * The type of the member.
     *
     * @param firstAccessor
     * The first accessor.
     *
     * @param secondAccessor
     * The second accessor.
     *
     * @returns
     * The generated code.
     */
    public static TestAccessors(memberType: MemberType, firstAccessor: Accessor, secondAccessor: Accessor): string
    {
        return this.GetContainerCode(
            ContainerType.Class,
            [firstAccessor, this.defaultModifier, memberType],
            [secondAccessor, this.defaultModifier, memberType]);
    }

    /**
     * Generates test-code for two modifiers.
     *
     * @param memberType
     * The type of the member.
     *
     * @param firstModifier
     * The first modifier.
     *
     * @param secondModifier
     * The second modifier.
     *
     * @returns
     * The generated code.
     */
    public static TestModifiers(memberType: MemberType, firstModifier: Modifier, secondModifier: Modifier): string
    {
        return this.GetContainerCode(
            ContainerType.Class,
            [this.defaultAccessor, firstModifier, memberType],
            [this.defaultAccessor, secondModifier, memberType]);
    }

    /**
     * Generates test-code for two signatures.
     *
     * @param memberType
     * The type of the member.
     *
     * @param signatures
     * The signatures to test.
     *
     * @returns
     * The generated code.
     */
    public static TestSignature(memberType: MemberType, ...signatures: Array<[Accessor, Modifier]>): string
    {
        return this.GetContainerCode(
            ContainerType.Class,
            ...signatures.map((signature): MemberDefinition => [signature[0], signature[1], memberType]));
    }

    /**
     * Gets code for a container.
     *
     * @param containerType
     * The type of the container.
     *
     * @param members
     * The members in the container.
     *
     * @returns
     * The wrapped code.
     */
    protected static GetContainerCode(containerType: ContainerType, ...members: MemberDefinition[]): string
    {
        let result: string;
        let code = members.map((member) => this.GetMemberCode(containerType, member)).join(EOL);

        switch (containerType)
        {
            case ContainerType.Class:
                result = `
                    declare class TestClass
                    {
                        ${code}
                    }`;
                break;
            case ContainerType.Interface:
                result = `
                    interface TestInterface
                    {
                        ${code}
                    }`;
                break;
            case ContainerType.Type:
                result = `
                    type TestType = {
                        ${code}
                    }`;
                break;
        }

        return result;
    }

    /**
     * Wraps an accessor around the code.
     *
     * @param accessor
     * The accessor.
     *
     * @param code
     * The code which is to be wrapped.
     *
     * @returns
     * The wrapped code.
     */
    protected static WrapAccessor(accessor: Accessor, code: string): string
    {
        let accessorCode;

        switch (accessor)
        {
            case Accessor.Private:
                accessorCode = "private";
                break;
            case Accessor.Protected:
                accessorCode = "protected";
                break;
            case Accessor.Public:
                accessorCode = "public";
                break;
        }

        return `${accessorCode} ${code}`;
    }

    /**
     * Wraps a modifier around the code.
     *
     * @param modifier
     * The modifier to wrap.
     *
     * @param code
     * The code which is to be wrapped.
     *
     * @returns
     * The wrapped code.
     */
    protected static WrapModifier(modifier: Modifier, code: string): string
    {
        if (modifier === Modifier.Instance)
        {
            return code;
        }
        else
        {
            let modifierCode: string;

            switch (modifier)
            {
                case Modifier.Static:
                    modifierCode = "static";
                    break;
                case Modifier.Abstract:
                    modifierCode = "abstract";
                    break;
            }

            return `${modifierCode} ${code}`;
        }
    }

    /**
     * Generates the code for the specified member.
     *
     * @param containerType
     * The type of the container.
     *
     * @param memberType
     * The type of the member.
     *
     * @returns
     * The generated code.
     */
    protected static GetMemberTypeCode(containerType: ContainerType, memberType: MemberType): string
    {
        let code: string;
        let isClass = containerType === ContainerType.Class;

        switch (memberType)
        {
            case MemberType.Field:
                code = "field: any;";
                break;
            case MemberType.Constructor:
                code = isClass ? "constructor() { }" : "new ();";
                break;
            case MemberType.Indexer:
                code = "[key: string]: any;";
                break;
            case MemberType.Method:
                code = isClass ? "Method() { }" : "Method();";
                break;
        }

        return code;
    }

    /**
     * Generates code for a member.
     *
     * @param containerType
     * The type of the container.
     *
     * @param member
     * The member to generate the code for.
     *
     * @returns
     * The generated code.
     */
    protected static GetMemberCode(containerType: ContainerType, member: MemberDefinition): string
    {
        /**
         * Generates the appropriate source-code.
         *
         * @param memberTypeCode
         * The source-code of the specified member-type.
         */
        let processor: (memberTypeCode: string) => string;

        if (containerType === ContainerType.Class)
        {
            processor = (memberTypeCode) =>
            {
                return this.WrapAccessor(member[0], this.WrapModifier(member[1], memberTypeCode));
            };
        }
        else
        {
            processor = (memberTypeCode) => memberTypeCode;
        }

        return processor(this.GetMemberTypeCode(containerType, member[2]));
    }
}
