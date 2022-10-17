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
    this.passwordEntries = [];
    this.database.getAllRecords()
      .subscribe( results => {
        results.forEach( entry => {
          this.passwordEntries.push(
            new PasswordEntry(entry.sitename, entry.weburl, entry.hashalgo, entry.seed, entry.pwlen, entry.comments)
          );
        });

        // this.passwordEntries.forEach( entry => {
        //   console.log(entry);
        // });
      });
  }
}
