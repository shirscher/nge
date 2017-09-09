import { ContainerRegistration } from '../containerRegistration.class';
import { ContainerRegistrationResolveMethod } from '../containerRegistrationResolveMethod.enum';
import { LifetimeScope } from '../lifetimeScope.enum';

describe('containerRegistration', () => {
    it('should set the symbol from the constructor', () => {
        const symbol = Symbol('test');
        const reg = new ContainerRegistration(symbol);
        expect(reg.symbol).toBe(symbol);
    });

    describe('when no registration type is specified', () => {
        it('should register the type as itself', () => {
            const reg = new ContainerRegistration(Symbol('test'));
            expect(reg.method).toBe(ContainerRegistrationResolveMethod.Self);
        });

        it('should default to instance lifetime', () => {
            const reg = new ContainerRegistration(Symbol('test'));
            expect(reg.lifetime).toBe(LifetimeScope.Instance);
        });

        it('should have an undefined name', () => {
            const reg = new ContainerRegistration(Symbol('test'));
            expect(reg.name).toBeUndefined();
        });
    });
});
