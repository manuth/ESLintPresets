import { Accessor } from "./Accessor";
import { MemberType } from "./MemberType";
import { Modifier } from "./Modifier";

/**
 * Represents a member.
 */
export type MemberDefinition = [Accessor, Modifier, MemberType];
