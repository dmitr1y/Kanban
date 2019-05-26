import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeam } from 'src/app/components/teams/team/team.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get(id: string): PromiseLike<ITeam> {
    return this.httpClient.get('/api/team/get', {
      params: {
        id,
      },
    }).pipe(map((data: { team: ITeam }) => data.team)).toPromise<ITeam>();
  }

  getList(): PromiseLike<ITeam[]> {
    return this.httpClient.get('/api/team/list')
      .pipe(map((data: { teams: ITeam[] }) => data.teams))
      .toPromise<ITeam[]>();
  }

  create(team: ITeam): PromiseLike<ITeam> {
    return this.httpClient.put('/api/team/create', { team })
      .pipe(map((data: { team: ITeam }) => data.team))
      .toPromise<ITeam>();
  }

  update(team: ITeam): PromiseLike<ITeam> {
    return this.httpClient.post('/api/team/update', { team })
      .pipe(map((data: { team: ITeam }) => data.team))
      .toPromise<ITeam>();
  }
}
