import { IUser } from './../../model/user.app.model';
import { GetUsersSuccess } from './../actions/user.actions';
import { IUserHttp } from '../../model/http-data-model/user-http.interface';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../states/app.state';
import {
    GetUsers,
    GetUserSuccess,
    GetUser,
    EUserActions
} from '../actions/user.actions';
import { UserServiceService } from '../../services/user-service.service';

import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((userhttp: IUserHttp) => of(new GetUsersSuccess(userhttp.users)))
  );


  constructor(
    private _userService: UserServiceService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
