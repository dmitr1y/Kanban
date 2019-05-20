import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-not-enough-rights',
  templateUrl: './not-enough-rights.component.html',
  styleUrls: ['./not-enough-rights.component.css']
})
export class NotEnoughRightsComponent implements OnInit {

  constructor(
    private location: Location,
  ) {
  }

  ngOnInit() {
  }

  public goBack(): void {
    this.location.back();
  }
}
