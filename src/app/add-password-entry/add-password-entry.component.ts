import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { PasswordEntry } from '../password-entry';

@Component({
  selector: 'app-add-password-entry',
  templateUrl: './add-password-entry.component.html',
  styleUrls: ['./add-password-entry.component.css']
})
export class AddPasswordEntryComponent implements OnInit {
  newRecord: PasswordEntry;

  constructor(
    private dbService: DatabaseService
  ) { }

  ngOnInit(): void {
    
  }

  submitNewRecord(): void {
    this.dbService.updateRecord(this.newRecord).subscribe();
  }

}
