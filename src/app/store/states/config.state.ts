import { IConfig } from './../../model/config.app.model';

export interface IConfigState {
    config: IConfig;
}

export const initailConfigState: IConfigState = {
    config: null,
};
