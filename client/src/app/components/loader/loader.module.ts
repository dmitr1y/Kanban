import { NgModule } from '@angular/core';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { MatProgressBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  entryComponents: [
    LoaderComponent,
  ],
  providers: [
    LoaderService,
  ],
  exports: [
    LoaderComponent,
  ],
  imports: [
    MatProgressBarModule,
    BrowserModule,
  ],
})
export class LoaderModule {
}
