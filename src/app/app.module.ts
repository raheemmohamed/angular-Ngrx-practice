import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import a service
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { UserEffects } from './store/effects/user.effects';
import { appReducer } from './store/reducers/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersComponent } from './contianer/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ConfigService } from './services/config.service';
import { ConfigEffects } from './store/effects/config.effects';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [UserServiceService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
