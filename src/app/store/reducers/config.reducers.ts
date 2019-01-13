import { initailConfigState, IConfigState } from './../states/config.state';
import { ConfigAction, EActionConfig} from './../actions/config.actions';

export const configReducer = (
    state = initailConfigState,
    action: ConfigAction): IConfigState => {
        switch (action.type) {
            case EActionConfig.GetConfigSuccess: {
                return {
                    ...state,
                    config: action.payload
                };
            }
            default:
            return state;
        }
};
