"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const containerRegistration_1 = require("../containerRegistration");
const containerRegistrationResolveMethod_1 = require("../containerRegistrationResolveMethod");
const lifetimeScope_1 = require("../lifetimeScope");
describe('containerRegistration', () => {
    it('should set the symbol from the constructor', () => {
        const symbol = Symbol('test');
        const reg = new containerRegistration_1.ContainerRegistration(symbol);
        expect(reg.symbol).toBe(symbol);
    });
    describe('when no registration type is specified', () => {
        it('should register the type as itself', () => {
            const reg = new containerRegistration_1.ContainerRegistration(Symbol('test'));
            expect(reg.method).toBe(containerRegistrationResolveMethod_1.ContainerRegistrationResolveMethod.Self);
        });
        it('should default to instance lifetime', () => {
            const reg = new containerRegistration_1.ContainerRegistration(Symbol('test'));
            expect(reg.lifetime).toBe(lifetimeScope_1.LifetimeScope.Instance);
        });
        it('should have an undefined name', () => {
            const reg = new containerRegistration_1.ContainerRegistration(Symbol('test'));
            expect(reg.name).toBeUndefined();
        });
    });
});
//# sourceMappingURL=containerRegistration.class.spec.js.map