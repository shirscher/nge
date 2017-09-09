import { ITestInterface1 } from './testInterface1.interface';
import { ITestInterface2 } from './testInterface2.interface';

export class TestClass2A implements ITestInterface2 {
    public i: ITestInterface1;

    constructor(i: ITestInterface1) {
        this.i = i;
    }
}
