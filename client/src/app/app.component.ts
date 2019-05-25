import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public constructor(
    private auth: AuthService,
  ) {
  }

  public ngOnInit(): void {
  }

  public isAuthorized(): boolean {
    return this.auth.isAuthorized();
  }
}
