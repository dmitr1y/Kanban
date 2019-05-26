import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from 'src/app/components/teams/team/team.interface';
import { UserService } from 'src/app/components/user/user.service';
import { IUser } from 'src/app/components/auth/interfaces';
import { MatDialog } from '@angular/material';
import { ListModalComponent } from 'src/app/components/user/list-modal/list-modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  @Input() team: ITeam;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
  }

  viewUsers() {
    let profiles: IUser[] = [];

    this.team.users.forEach(id => {
      this.userService.getProfile(id).then(profile => {
          profiles.push(profile);
        },
        err => {

        });
    });

    const dialogRef = this.dialog.open(ListModalComponent, {
      width: '350px',
      data: profiles,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
