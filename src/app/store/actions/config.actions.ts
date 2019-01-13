import { IConfig } from './../../model/config.app.model';
import {Action} from '@ngrx/store';

export enum EActionConfig {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
    public readonly type = EActionConfig.GetConfig;
}

export class GetConfigSuccess implements Action {
    public readonly type = EActionConfig.GetConfigSuccess;
    constructor(public payload: IConfig) {}
}

export type ConfigAction =
|GetConfig
|GetConfigSuccess;
