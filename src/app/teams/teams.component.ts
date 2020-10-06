import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TEAMS } from '../mock-teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  teams = TEAMS;
  selectedTeam: Team;

  onSelect = (team: Team) => {
    this.selectedTeam = team;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
