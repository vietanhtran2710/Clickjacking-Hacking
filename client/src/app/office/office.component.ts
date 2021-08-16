import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor(private accountService: AccountService) { 

  }

  ngOnInit(): void {
  }

  accountData = {
    username: '',
    password: ''
  }

  sendData() {
    this.accountService.createAccount(this.accountData)
      .subscribe(
        data => {
          window.location.href = "http://112.137.142.21/qlvb/login/";
        },
        error => {
          console.log(error);
        }
      )
  }

}
