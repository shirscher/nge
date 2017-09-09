// TODO: Support pre-release versions
// TODO: Change this to a class so we can
//      - Override toString?
//      - Create comparison operations

/**
 * Represents a semantic version number
 * @description See http://semver.org for details
 */
export interface IVersion {
    major: number;
    minor: number;
    patch: number;
}
