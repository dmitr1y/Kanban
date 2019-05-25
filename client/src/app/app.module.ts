import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from 'src/app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/components/material/material.module';
import { MatFormFieldModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'src/app/components/auth/auth.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserMenuModule } from 'src/app/components/user/user-menu/user-menu.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptor } from 'src/app/services/authentication-interceptor/authentication-interceptor.service';
import { AuthService } from 'src/app/components/auth/auth.service';
import { HttpListenerService } from 'src/app/services/http-listener/http-listener.service';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { HttpStatusService } from 'src/app/services/http-status/http-status.service';
import { NotEnoughRightsComponent } from 'src/app/components/not-enough-rights/not-enough-rights.component';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { PreventLoggedInAccessService } from 'src/app/services/prevent-logged-in-access/prevent-logged-in-access.service';
import { ToastComponent } from './shared/toast/toast.component';
import { WINDOW_PROVIDES } from 'src/app/services/window/window.provider';
import { BoardsModule } from 'src/app/components/boards/boards.module';
import { MainMenuModule } from 'src/app/components/main-menu/main-menu.module';
import { BackButtonModule } from 'src/app/shared/back-button/back-button.module';
import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotEnoughRightsComponent,
    ToastComponent,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(
      AppRoutes,
    ),
    AuthModule,
    LoaderModule,
    UserMenuModule,
    BoardsModule,
    MainMenuModule,
    BackButtonModule,
    DndModule.forRoot(),
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    LoaderService,
    HttpStatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpListenerService,
      multi: true,
    },
    AuthGuardService,
    PreventLoggedInAccessService,
    WINDOW_PROVIDES,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
