import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { PasswordEntry } from '../password-entry';

@Component({
  selector: 'app-password-entry',
  templateUrl: './password-entry.component.html',
  styleUrls: ['./password-entry.component.css']
})
export class PasswordEntryComponent implements OnInit {
  @Input() passwordEntry: PasswordEntry;

  constructor(
    private dbService: DatabaseService
  ) { }

  ngOnInit(): void {
  }

}
