import { NgModule } from '@angular/core';
import { UserMenuComponent } from 'src/app/components/user/user-menu/user-menu.component';
import { MatButtonModule, MatDividerModule, MatIconModule, MatMenuModule } from '@angular/material';
import { UserService } from 'src/app/components/user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from 'src/app/components/auth/auth.service';

@NgModule({
  declarations: [
    UserMenuComponent,
  ],
  entryComponents: [
    UserMenuComponent,
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    BrowserModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [
    UserService,
    AuthService,
  ],
  exports: [
    UserMenuComponent,
  ]
})
export class UserMenuModule {
}
