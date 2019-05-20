import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/components/material/material.module';
import { LeftNavComponent } from './left-nav.component';
import { MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LeftNavComponent,
  ],
  entryComponents: [
    LeftNavComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule,
  ],
  providers: [
  ],
  exports: [
    LeftNavComponent,
  ],
})
export class LeftNavModule {
}
