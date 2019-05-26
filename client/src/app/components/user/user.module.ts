import { NgModule } from '@angular/core';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserService } from 'src/app/components/user/user.service';
import { MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { ListModalComponent } from './list-modal/list-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserComponent,
    ListModalComponent,
  ],
  entryComponents: [
    UserComponent,
  ],
  providers: [
    UserService,
  ],
  exports: [
    UserComponent,
    ListModalComponent,
  ],
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class UserModule {
}
