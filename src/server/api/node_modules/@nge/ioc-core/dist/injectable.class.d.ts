export declare function configureDecorators(injectableDecoratorImpl: any, injectDecoratorImpl: any): void;
/**
 * Decorator that marks a class as injectable by a dependency injection container.
 */
export declare function Injectable(): any;
/**
 * Decorator that registers a constructor parameter or class property to be resolved by a container when it's parent
 * class is resolved.
 * @param [name] The name of the dependency to resolve.
 */
export declare function Inject(name?: symbol): any;
