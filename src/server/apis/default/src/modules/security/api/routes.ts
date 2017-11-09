import * as hapi from 'hapi';

export const routes: hapi.RouteConfiguration[] = [
    // Users
    {
        method: 'GET',
        path: '/users',
    },
    {
        method: 'POST',
        path: '/users',
    },
    {
        method: 'GET',
        path: '/users/{userId}',
    },
    {
        method: 'PUT',
        path: '/users/{userId}',
    },
    {
        method: 'DELETE',
        path: '/users/{userId}',
    },
    {
        method: 'GET',
        path: '/users/{userId}/permissions',
    },
    {
        method: 'GET',
        path: '/users/{userId}/roles',
    },
    {
        method: 'POST',
        path: '/users/{userId}/roles',
    },
    {
        method: 'GET',
        path: '/users/{userId}/roles/{roleId}',
    },
    {
        method: 'DELETE',
        path: '/users/{userId}/roles/{roleId}',
    },
    {
        method: 'GET',
        path: '/users/{userId}/groups',
    },
    {
        method: 'POST',
        path: '/users/{userId}/groups',
    },
    {
        method: 'GET',
        path: '/users/{userId}/groups/{groupId}',
    },
    {
        method: 'DELETE',
        path: '/users/{userId}/groups/{groupId}',
    },

    // Roles
    {
        method: 'GET',
        path: '/roles',
    },
    {
        method: 'POST',
        path: '/roles',
    },
    {
        method: 'GET',
        path: '/roles/{roleId}',
    },
    {
        method: 'PUT',
        path: '/roles/{roleId}',
    },
    {
        method: 'DELETE',
        path: '/roles/{roleId}',
    },
    {
        method: 'GET',
        path: '/roles/{roleId}/users',
    },
    {
        method: 'POST',
        path: '/roles/{roleId}/users',
    },
    {
        method: 'GET',
        path: '/roles/{roleId}/users/{userId}',
    },
    {
        method: 'DELETE',
        path: '/roles/{roleId}/users/{userId}',
    },

    // Groups
    {
        method: 'GET',
        path: '/groups',
    },
    {
        method: 'POST',
        path: '/groups',
    },
    {
        method: 'GET',
        path: '/groups/{groupId}',
    },
    {
        method: 'PUT',
        path: '/groups/{groupId}',
    },
    {
        method: 'DELETE',
        path: '/groups/{groupId}',
    },
    {
        method: 'GET',
        path: '/groups/{groupId}/users',
    },
    {
        method: 'POST',
        path: '/groups/{groupId}/users',
    },
    {
        method: 'GET',
        path: '/groups/{groupId}/users/{userId}',
    },
    {
        method: 'DELETE',
        path: '/groups/{groupId}/users/{userId}',
    },

    // Permissions
    {
        method: 'GET',
        path: '/permissions',
    },

    // scopes
    {
        method: 'GET',
        path: '/scopes',
    },
];
