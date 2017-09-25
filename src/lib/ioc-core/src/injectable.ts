let injectableDecorator: any = () => {
    // tslint:disable-next-line:no-console
    console.warn('No dependency injection container has configured the @Injectable decorator.');
};
let injectDecorator: any = () => {
    // tslint:disable-next-line:no-console
    console.warn('No dependency injection container has configured the @Inject decorator.');
};

export function configureDecorators(
        injectableDecoratorImpl: any,
        injectDecoratorImpl: any) {
    injectableDecorator = injectableDecoratorImpl;
    injectDecorator = injectDecoratorImpl;
}

/**
 * Decorator that marks a class as injectable by a dependency injection container.
 */
export function Injectable(): any {
    return injectableDecorator();
}

/**
 * Decorator that registers a constructor parameter or class property to be resolved by a container when it's parent
 * class is resolved.
 * @param [name] The name of the dependency to resolve.
 */
export function Inject(name?: symbol): any {
    return injectDecorator(name);
}
