import { Injectable } from '@nge/ioc-core';
import { ITestInterface1 } from './testInterface1';

@Injectable()
export class TestClass1B implements ITestInterface1 {
    public n: number;
}
