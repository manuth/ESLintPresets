import { Accessor } from "./Accessor.mjs";
import { MemberType } from "./MemberType.mjs";
import { Modifier } from "./Modifier.mjs";

/**
 * Represents a member.
 */
export type MemberDefinition = [Accessor, Modifier, MemberType];
