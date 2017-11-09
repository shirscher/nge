export interface IResponse {
    /**
     * A unique ID used to identify this request.
     */
    correlationId: string;
}

export interface IPageableResponse<T> {
    items: T[];

    refs: { prev?: string, next?: string, first?: string };
}

export interface IPageableResponse<T> {
    items: T[];

    limit: number;
    offset: number;
    pages: number;
    count?: number;

    refs: { prev?: string, next?: string, first?: string };
}

export interface IPageableCountResponse<T> {
    items: T[];

    currentPage: number;
    pageSize: number;
    totalCount: number;
    refs: { prev: string, next: string, first: string };
}
