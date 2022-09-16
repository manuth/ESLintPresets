import { Accessor } from "./Accessor.js";
import { MemberType } from "./MemberType.js";
import { Modifier } from "./Modifier.js";

/**
 * Represents a member.
 */
export type MemberDefinition = [Accessor, Modifier, MemberType];
