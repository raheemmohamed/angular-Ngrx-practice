
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IConfig } from '../../model/config.app.model';
import { ConfigService } from './../../services/config.service';
import { EActionConfig, GetConfig, GetConfigSuccess } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType<GetConfig>(EActionConfig.GetConfig),
    switchMap(() => this._configService.getConfig()),
    switchMap((config: IConfig) => {
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private _configService: ConfigService,
    private _actions$: Actions) {}
}
