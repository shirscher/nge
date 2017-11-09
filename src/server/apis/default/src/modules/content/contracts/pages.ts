export interface IPagesResponse {
    pages: IPage[];
}

export interface IPage {
    content: string;
    contentItems: IContentItem[];
}

export interface IContentItem {
    key: string;
    value: string;
}
