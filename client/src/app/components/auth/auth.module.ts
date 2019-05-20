import { NgModule } from '@angular/core';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/components/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule, MatInputModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/components/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/components/user/user.service';
import { ToastComponent } from 'src/app/shared/toast/toast.component';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  entryComponents: [
    AuthComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatBottomSheetModule,
  ],
  providers: [
    AuthService,
    UserService,
  ],
  exports: [
    AuthComponent,
  ],
})
export class AuthModule {
}
