import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from 'src/app/components/main-menu/main-menu.component';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainMenuComponent,
  ],
  entryComponents: [
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    MainMenuComponent,
  ],
})
export class MainMenuModule {
}
