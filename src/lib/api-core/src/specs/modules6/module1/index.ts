import { IModule } from '../../../module.interface';

export default (): IModule => {
    return {
        load: (): void => {
            throw new Error('Module load failed');
        },

        name: '',

        version: { major: 0, minor: 1, patch: 0 },
    };
};
