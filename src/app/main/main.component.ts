import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { PasswordEntry } from '../password-entry';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  passwordEntries: PasswordEntry[];

  constructor(
    private database: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.database.getAllRecords()
      .subscribe( results => {
        this.passwordEntries = results;
      });
  }
}
