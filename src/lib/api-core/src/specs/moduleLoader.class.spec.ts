import { ModuleLoader } from '../moduleLoader.class';
import { FakeApplication } from './fakeApplication.class';

describe('ModuleReader', () => {
    const moduleLoader = new ModuleLoader();
    let fakeApplication: FakeApplication;

    beforeEach(() => {
        fakeApplication = new FakeApplication();
    });

    describe('load', () => {
        it('should call load on all modules in the folder and pass in the application', () => {
            moduleLoader.loadModules(
                __dirname + '/modules1',
                fakeApplication);

            expect(fakeApplication.testVar).toBe('module1module2');
        });

        describe('when an error callback is defined', () => {
            describe('when the module folder doesn\'t exist', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/doesnotexist',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                });
            });

            describe('when the module throws an error', () => {
                it('should call the error callback with an IModuleLoadError that has the original error', () => {
                    let callCount = 0;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules2',
                        fakeApplication,
                        (err) => {
                            callCount++;
                            receivedErr = err;
                        });

                    expect(callCount).toBe(1);
                    expect(receivedErr.message).toBeDefined();
                    expect(receivedErr.innerError).toBeDefined();
                    expect(receivedErr.innerError.message).toBe('Module raised an error');
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules2',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('when the module folder does not contain an index.ts file', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules3',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                    expect(receivedErr.innerError).toBeDefined();
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules3',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('when the module does not have a default export', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules4',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules4',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('when the module\'s default export is not a function', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules5',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules5',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('the module factory throws an exception', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules6',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                    expect(receivedErr.innerError).toBeDefined();
                    expect(receivedErr.innerError.message).toBe('Module load failed');
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules6',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('the returned module does not have a load function', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules7',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules7',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('the module factory function throws an error', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules8',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                    expect(receivedErr.innerError).toBeDefined();
                    expect(receivedErr.innerError.message).toBe('Module factory failed');
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules8',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('when the module factory function returns undefined', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules9',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                    expect(receivedErr.message).toContain('undefined');
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules9',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });

            describe('when the load property on the returned module is not a function', () => {
                it('should call the error callback with an IModuleLoadError', () => {
                    let wasCalled = false;
                    let receivedErr: any;

                    moduleLoader.loadModules(
                        __dirname + '/modules10',
                        fakeApplication,
                        (err) => {
                            wasCalled = true;
                            receivedErr = err;
                        });

                    expect(wasCalled).toBeTruthy();
                    expect(receivedErr.message).toBeDefined();
                });

                it('should continue loading additional modules', () => {
                    moduleLoader.loadModules(
                        __dirname + '/modules10',
                        fakeApplication,
                        () => {
                            // Noop
                        });

                    expect(fakeApplication.testVar).toBe('module2');
                });
            });
        });
    });
});
