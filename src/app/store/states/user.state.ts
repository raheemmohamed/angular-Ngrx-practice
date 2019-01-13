import { IUser } from './../../model/user.app.model';

export interface IUserState {
    users: IUser;
    selectedUser: IUser;
}

export const initailUserState: IUserState = {
    users: null,
    selectedUser: null
};
