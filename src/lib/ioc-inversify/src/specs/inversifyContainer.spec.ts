import { configureDecorators } from '@nge/ioc-core';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { InversifyContainerBuilder } from '../inversifyContainerBuilder';
import { TestClass1A } from './testClass1A';
import { TestClass1B } from './testClass1B';
import { TestClass2A } from './testClass2A';
import { ITestInterface1 } from './testInterface1';
import { ITestInterface2 } from './testInterface2';
import { TYPES } from './testTypes';

describe('InversifyContainer', () => {
    let inversifyContainerBuilder: InversifyContainerBuilder;

    beforeEach(() => {
        inversifyContainerBuilder = new InversifyContainerBuilder();
        configureDecorators(injectable, inject);
    });

    describe('resolve', () => {

        it('should resolve registered dependencies', () => {
            inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1A);
            const inversifyContainer = inversifyContainerBuilder.build();
            const impl = inversifyContainer.resolve<ITestInterface1>(TYPES.ITestInterface1);

            expect(impl).toBeDefined(impl);
            expect(impl instanceof TestClass1A).toBeTruthy();
        });

        it('should throw an error if dependency is not registered', () => {
            const inversifyContainer = inversifyContainerBuilder.build();
            expect(() => {
                    inversifyContainer.resolve<ITestInterface1>(TYPES.ITestInterface1);
                })
            .toThrowError();
        });

        it('should resolve named dependencies', () => {
            inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1A).named('name1');
            inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1B).named('name2');

            const inversifyContainer = inversifyContainerBuilder.build();
            const impl = inversifyContainer.resolve<ITestInterface1>(TYPES.ITestInterface1, 'name1');

            expect(impl).toBeDefined(impl);
            expect(impl instanceof TestClass1A).toBeTruthy();
        });

        describe('when multiple implementations are registered for a type', () => {
            it('should throw an error', () => {
                inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1A);
                inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1B);

                const inversifyContainer = inversifyContainerBuilder.build();

                expect(() => {
                        inversifyContainer.resolve<ITestInterface1>(TYPES.ITestInterface1);
                    })
                .toThrowError();
            });
        });

        describe('when registered with a factory', () => {
            it('should call factory when resolved', () => {
                inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).usingFactory(
                    () => {
                        const impl = new TestClass1A();
                        impl.n = 1;
                        return impl;
                    });

                const inversifyContainer = inversifyContainerBuilder.build();

                const resolved = inversifyContainer.resolve<ITestInterface1>(TYPES.ITestInterface1);
                expect(resolved instanceof TestClass1A).toBeTruthy();
                expect(resolved.n).toBe(1);
            });

            it('should use container to resolve dependencies in factory', () => {
                inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1A);

                inversifyContainerBuilder.register<ITestInterface2>(TYPES.ITestInterface2).usingFactory(
                    (c) => new TestClass2A(c.resolve<ITestInterface1>(TYPES.ITestInterface1)));

                const inversifyContainer = inversifyContainerBuilder.build();

                const resolved = inversifyContainer.resolve<ITestInterface2>(TYPES.ITestInterface2);
                expect(resolved instanceof TestClass2A).toBeTruthy();
                expect(resolved.i instanceof TestClass1A).toBeTruthy();
            });
        });
    });

    describe('resolveAll', () => {
        it('should resolve all registered dependencies', () => {
            inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1A);
            inversifyContainerBuilder.register<ITestInterface1>(TYPES.ITestInterface1).as(TestClass1B);

            const inversifyContainer = inversifyContainerBuilder.build();

            const impls = inversifyContainer.resolveAll<ITestInterface1>(TYPES.ITestInterface1);

            expect(impls).toBeDefined();
            expect(impls.length).toBe(2);
        });

        describe('when no dependencies are registered for a type', () => {
            const inversifyContainer = inversifyContainerBuilder.build();

            it('should throw an error', () => {
                expect(() => {
                    inversifyContainer.resolveAll<ITestInterface1>(TYPES.ITestInterface1);
                }).toThrowError();
            });
        });
    });
});
