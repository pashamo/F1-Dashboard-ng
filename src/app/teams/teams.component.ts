import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  team: Team = {
    name: "Ferrari",
    firstDriver: "Sebastian Vettel",
    secondDriver: "Charles Leclerc"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
