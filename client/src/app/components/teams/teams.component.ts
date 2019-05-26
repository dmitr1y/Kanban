import { Component, OnInit } from '@angular/core';
import { ITeam } from 'src/app/components/teams/team/team.interface';
import { TeamsService } from 'src/app/components/teams/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {

  teams: ITeam[];

  constructor(
    private service: TeamsService,
  ) {
  }

  ngOnInit() {
    this.service.getList().then(teams => {
        this.teams = teams;
      },
      err => {
        console.log(err);
      });
  }

}
