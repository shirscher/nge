import { ITestInterface1 } from './testInterface1';
import { ITestInterface2 } from './testInterface2';

export class TestClass2A implements ITestInterface2 {
    public i: ITestInterface1;

    constructor(i: ITestInterface1) {
        this.i = i;
    }
}
