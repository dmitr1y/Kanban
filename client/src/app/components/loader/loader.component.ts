import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  public state = false;

  private subscription: Subscription;

  constructor(
    private service: LoaderService,
  ) { }

  ngOnInit() {
    this.subscription = this.service.loaderState.subscribe((state) => {
      this.state = state;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
