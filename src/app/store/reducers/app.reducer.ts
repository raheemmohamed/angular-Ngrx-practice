import { routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';

import {userReducer} from '../reducers/user.reducers';
import {configReducer} from '../reducers/config.reducers';
import { IAppState } from '../states/app.state';

export const appReducer: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducer,
    config: configReducer
};
