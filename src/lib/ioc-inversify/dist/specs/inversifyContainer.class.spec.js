"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_core_1 = require("@nge/ioc-core");
const inversify_1 = require("inversify");
require("reflect-metadata");
const inversifyContainerBuilder_class_1 = require("../inversifyContainerBuilder.class");
const testClass1A_class_1 = require("./testClass1A.class");
const testClass1B_class_1 = require("./testClass1B.class");
const testClass2A_class_1 = require("./testClass2A.class");
const testTypes_1 = require("./testTypes");
describe('InversifyContainer', () => {
    let inversifyContainerBuilder;
    beforeEach(() => {
        const container = new inversify_1.Container();
        inversifyContainerBuilder = new inversifyContainerBuilder_class_1.InversifyContainerBuilder(container);
        ioc_core_1.configureDecorators(inversify_1.injectable, inversify_1.inject);
    });
    describe('resolve', () => {
        it('should resolve registered dependencies', () => {
            inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1A_class_1.TestClass1A);
            const inversifyContainer = inversifyContainerBuilder.build();
            const impl = inversifyContainer.resolve(testTypes_1.TYPES.ITestInterface1);
            expect(impl).toBeDefined(impl);
            expect(impl instanceof testClass1A_class_1.TestClass1A).toBeTruthy();
        });
        it('should throw an error if dependency is not registered', () => {
            const inversifyContainer = inversifyContainerBuilder.build();
            expect(() => {
                inversifyContainer.resolve(testTypes_1.TYPES.ITestInterface1);
            })
                .toThrowError();
        });
        it('should resolve named dependencies', () => {
            inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1A_class_1.TestClass1A).named('name1');
            inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1B_class_1.TestClass1B).named('name2');
            const inversifyContainer = inversifyContainerBuilder.build();
            const impl = inversifyContainer.resolve(testTypes_1.TYPES.ITestInterface1, 'name1');
            expect(impl).toBeDefined(impl);
            expect(impl instanceof testClass1A_class_1.TestClass1A).toBeTruthy();
        });
        describe('when multiple implementations are registered for a type', () => {
            it('should throw an error', () => {
                inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1A_class_1.TestClass1A);
                inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1B_class_1.TestClass1B);
                const inversifyContainer = inversifyContainerBuilder.build();
                expect(() => {
                    inversifyContainer.resolve(testTypes_1.TYPES.ITestInterface1);
                })
                    .toThrowError();
            });
        });
        describe('when registered with a factory', () => {
            it('should call factory when resolved', () => {
                inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).usingFactory(() => {
                    const impl = new testClass1A_class_1.TestClass1A();
                    impl.n = 1;
                    return impl;
                });
                const inversifyContainer = inversifyContainerBuilder.build();
                const resolved = inversifyContainer.resolve(testTypes_1.TYPES.ITestInterface1);
                expect(resolved instanceof testClass1A_class_1.TestClass1A).toBeTruthy();
                expect(resolved.n).toBe(1);
            });
            it('should use container to resolve dependencies in factory', () => {
                inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1A_class_1.TestClass1A);
                inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface2).usingFactory((c) => new testClass2A_class_1.TestClass2A(c.resolve(testTypes_1.TYPES.ITestInterface1)));
                const inversifyContainer = inversifyContainerBuilder.build();
                const resolved = inversifyContainer.resolve(testTypes_1.TYPES.ITestInterface2);
                expect(resolved instanceof testClass2A_class_1.TestClass2A).toBeTruthy();
                expect(resolved.i instanceof testClass1A_class_1.TestClass1A).toBeTruthy();
            });
        });
    });
    describe('resolveAll', () => {
        it('should resolve all registered dependencies', () => {
            inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1A_class_1.TestClass1A);
            inversifyContainerBuilder.register(testTypes_1.TYPES.ITestInterface1).as(testClass1B_class_1.TestClass1B);
            const inversifyContainer = inversifyContainerBuilder.build();
            const impls = inversifyContainer.resolveAll(testTypes_1.TYPES.ITestInterface1);
            expect(impls).toBeDefined();
            expect(impls.length).toBe(2);
        });
        describe('when no dependencies are registered for a type', () => {
            const inversifyContainer = inversifyContainerBuilder.build();
            it('should throw an error', () => {
                expect(() => {
                    inversifyContainer.resolveAll(testTypes_1.TYPES.ITestInterface1);
                }).toThrowError();
            });
        });
    });
});
//# sourceMappingURL=inversifyContainer.class.spec.js.map