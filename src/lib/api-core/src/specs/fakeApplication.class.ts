import { IApplication } from '../application.interface';

export class FakeApplication implements IApplication {
    public testVar: string;

    public start(): void {
        // Noop
    }
}
