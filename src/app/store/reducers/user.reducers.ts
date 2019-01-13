import { UserActions, EUserActions } from './../actions/user.actions';
import { initailUserState, IUserState } from './../states/user.state';

export const userReducer = (
    state = initailUserState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        default:
        return state;
    }
};

