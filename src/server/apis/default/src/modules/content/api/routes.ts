import * as hapi from 'hapi';

// TODO: Need:
// Pages - full HTML content pages with
// Folders - a way to group stuff
// Block/Snippet (name?) - Small chunks of HTML or plain text (should have a type)
// Block/Snippet Group - groupings of blocks/snippets, usually text blocks that are on a single page
// ^ or do we not do this and just select by folder?
export const routes: hapi.RouteConfiguration[] = [
    {
        method: 'GET',
        path: '/pages',
    },
    {
        method: 'GET',
        path: '/content',
    },
    {
        method: 'GET',
        path: '/dashboards',
    },
];
