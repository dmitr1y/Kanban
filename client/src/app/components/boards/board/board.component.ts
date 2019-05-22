import { Component, Input, OnInit } from '@angular/core';
import { IDashboard } from 'src/app/components/boards/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Input() dashboard: IDashboard;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  openBoard(dashboard: IDashboard): void {
    console.log('navigate to board', dashboard._id);
    this.router.navigate(['/dashboard/view'], {
      queryParams: {
        id: dashboard._id,
      },
    });
  }
}
