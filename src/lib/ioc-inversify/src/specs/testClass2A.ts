import {  Inject, Injectable } from '@nge/ioc-core';

import '../inversifyContainer';
import { ITestInterface1 } from './testInterface1';
import { ITestInterface2 } from './testInterface2';
import { TYPES } from './testTypes';

@Injectable()
export class TestClass2A implements ITestInterface2 {
    public i: ITestInterface1;

    constructor(@Inject(TYPES.ITestInterface1) i: ITestInterface1) {
        this.i = i;
    }
}
