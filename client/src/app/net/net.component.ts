import { Component, OnInit } from '@angular/core';
import { AccountService} from '../account.service'

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.css']
})
export class NetComponent implements OnInit {

  constructor(private accountService: AccountService) { }

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
          window.location.href = "http://112.137.142.19";
        },
        error => {
          console.log(error);
        }
      )
  }

}
