// GET /users

export interface IGetUsersResponse {
    users: IUser[];
    // TODO: paging
}

export interface IUser {
    userId: number;
    userName: string;
    lastLoginTimestamp: Date;
    updateTimestamp: Date;
}

// POST /users

export interface IPostUsersRequest {
    userName: string;
}

export interface IPostUsersResponse {
    userId: number;
}

// GET /users/{userId}

export interface IGetUserResponse extends IUser {
}

// GET /users/{userId}/roles

export interface IGetUserRolesResponse {
    roles: IUserRole[];
}

export interface IUserRole {
    roleId: number;
    roleName: string;
    scopeCode: string;
    scopeIdentifier: string;
    updateTimestamp: Date;
}

// POST /users/{userId}/roles

export interface IPostUserRolesRequest {
    roleId: number;
    scopeCode: string;
    scopeIdentifier: string;
}

export interface IPostUserRolesResponse {
    // TODO: ?
}

// GET /users/{userId}/groups

export interface IGetUserGroupsResponse {
    groups: IUserGroup[];
}

export interface IUserGroup {
    groupId: number;
    groupName: string;
    updateTimestamp: Date;
}

// POST /users/{userId}/groups

export interface IPostUserGroupsResponse {
    groupId: number;
}

// GET /users/{userId}/permissions

export interface IGetUserPermissionsResponse {
    permissions: IUserPermission[];
    // TODO: Paging?
}

export interface IUserPermission {
    permissionCode: string;
    scopeCode: string;
    scopeIdentifier: string;
}

// GET /users/{userId}/permissions/{permissionCode}

export interface IGetUserPermissionResponse extends IUserPermission {
}

// GET /permissions
export interface IGetPermissionsResponse {
    permissions: IPermission[];
}

export interface IPermission {
    code: string;
    name: string;
    description: string;
}
