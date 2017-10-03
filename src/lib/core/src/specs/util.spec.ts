// Magic numbers OK for tests
// tslint:disable:no-magic-numbers

import * as util from '../util';

describe('deepTest', () => {
    describe('when object is null', () => {
        it('should return undefined', () => {
            const result = util.deepTest(null, 'property');
            expect(result).toBeUndefined();
        });
    });

    describe('when object is undefined', () => {
        it('should return undefined', () => {
            const result = util.deepTest(undefined, 'property');
            expect(result).toBeUndefined();
        });
    });

    describe('when property is empty', () => {
        it('should return original object', () => {
            const result = util.deepTest({ a: 1 }, '');
            expect(result).toEqual({ a: 1 });
        });
    });

    describe('when property is whitespace', () => {
        it('should returned undefined', () => {
            const result = util.deepTest({ a: 1 }, '  \t');
            expect(result).toEqual({ a: 1 });
        });
    });

    describe('when property exists', () => {
        it('should return values', () => {
            const result = util.deepTest({ a: 1 }, 'a');
            expect(result).toEqual(1);
        });

        it('should return objects', () => {
            const result = util.deepTest({ a: { b: { c: 1 } } }, 'a');
            expect(result).toEqual({ b: { c: 1 } });
        });

        it('should return deeply nested values', () => {
            const result = util.deepTest({ a: { b: { c: 1 } } }, 'a.b.c');
            expect(result).toEqual(1);
        });

        it('should return array members', () => {
            const result = util.deepTest({ a: { b: ['x', 'y', 'z'] } }, 'a.b.1');
            expect(result).toEqual('y');
        });
    });

    describe('when property does not exist', () => {
        it('should return undefined', () => {
            const result = util.deepTest({ a: 1 }, 'b');
            expect(result).toBeUndefined();
        });

        it('should stop at first undefined member', () => {
            const result = util.deepTest({ a: { b: { c: 1 }}}, 'a.b.d.e.f');
            expect(result).toBeUndefined();
        });

        it('should handle out of bounds array members', () => {
            const result = util.deepTest({ a: ['x', 'y']}, 'a.2');
            expect(result).toBeUndefined();
        });
    });

    describe('when property is invalid', () => {
        it('should return undefined', () => {
            const result = util.deepTest({ a: 1 }, 'a.#$%');
            expect(result).toBeUndefined();
        });
    });
});

describe('deepSet', () => {
    describe('when object is null', () => {
        it('should throw exception', () => {
            expect(() => {
                util.deepSet(null, 'a.b', 1);
             }).toThrowError();
        });
    });

    describe('when object is undefined', () => {
        it('should throw exception', () => {
            expect(() => {
                util.deepSet(undefined, 'a.b', 1);
             }).toThrowError();
        });
    });

    describe('when path exists', () => {
        it('should set root value', () => {
            const o = { a: 1, b: 2 };
            util.deepSet(o, 'a', 3);
            expect(o.a).toEqual(3);
        });

        it('should set nested values', () => {
            const o = { a: { b: { c: 1 } } };
            util.deepSet(o, 'a.b.c', 2);
            expect(o.a.b.c).toEqual(2);
        });

        it('should overwrite full object paths', () => {
            const o: any = { a: { b: { c: 1 } } };
            util.deepSet(o, 'a.b', { d: 2 });
            expect(o.a.b.d).toEqual(2);
        });
    });

    describe('when path does not exist', () => {
        it('should create top level properties', () => {
            const o: any = { a: 1 };
            util.deepSet(o, 'b', 2);
            expect(o.b).toEqual(2);
        });

        it('should create nested properties', () => {
            const o: any = { a: 1 };
            util.deepSet(o, 'b.c.d', 2);
            expect(o.b.c.d).toEqual(2);
        });

        it('should keep original references', () => {
            const o: any = { a: 1, b: { c: { } } };
            const c: any = o.b.c;

            util.deepSet(o, 'b.c.d.e', 2);

            expect(o.b.c.d.e).toEqual(2);
            expect(o.b.c).toEqual(c);
        });
    });
});
