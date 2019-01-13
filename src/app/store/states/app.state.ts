import {RouterReducerState} from '@ngrx/router-store';
import { IUserState, initailUserState } from './user.state';
import { IConfigState, initailConfigState } from './config.state';

export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
}

export const InitialAppState: IAppState = {
    users: initailUserState,
    config: initailConfigState
};

export function getInitialState(): IAppState {
    return InitialAppState;
}
