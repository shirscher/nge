"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let injectableDecorator = () => {
    // tslint:disable-next-line:no-console
    console.warn('No dependency injection container has configured the @Injectable decorator.');
};
let injectDecorator = () => {
    // tslint:disable-next-line:no-console
    console.warn('No dependency injection container has configured the @Inject decorator.');
};
function configureDecorators(injectableDecoratorImpl, injectDecoratorImpl) {
    injectableDecorator = injectableDecoratorImpl;
    injectDecorator = injectDecoratorImpl;
}
exports.configureDecorators = configureDecorators;
/**
 * Decorator that marks a class as injectable by a dependency injection container.
 */
function Injectable() {
    return injectableDecorator();
}
exports.Injectable = Injectable;
/**
 * Decorator that registers a constructor parameter or class property to be resolved by a container when it's parent
 * class is resolved.
 * @param [name] The name of the dependency to resolve.
 */
function Inject(name) {
    return injectDecorator(name);
}
exports.Inject = Inject;
//# sourceMappingURL=injectable.class.js.map