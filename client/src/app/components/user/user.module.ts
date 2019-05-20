import { NgModule } from '@angular/core';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserService } from 'src/app/components/user/user.service';

@NgModule({
  declarations: [
    UserComponent,
  ],
  entryComponents: [
    UserComponent,
  ],
  providers: [
    UserService,
  ],
  exports: [
    UserComponent,
  ],
  imports: [

  ],
})
export class UserModule {
}
