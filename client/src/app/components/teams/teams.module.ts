import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from 'src/app/components/teams/teams.component';
import { TeamComponent } from 'src/app/components/teams/team/team.component';
import { TeamDetailComponent } from 'src/app/components/teams/team-detail/team-detail.component';
import { TeamsService } from 'src/app/components/teams/teams.service';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { ListModalComponent } from 'src/app/components/user/list-modal/list-modal.component';
import { UserModule } from 'src/app/components/user/user.module';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent,
    TeamDetailComponent,
  ],
  entryComponents: [
    ListModalComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    UserModule,
  ],
  providers: [
    TeamsService,
  ],
  exports: [
    TeamsComponent,
    TeamDetailComponent,
  ],
})
export class TeamsModule {
}
