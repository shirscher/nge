export interface IEntity<T> {
    getId(): T;
}

export interface IChangeTrackingEntity<TId, TModel> extends IEntity<TId> {
    getOldValues(): TModel;

    getNewValues(): TModel;
}
