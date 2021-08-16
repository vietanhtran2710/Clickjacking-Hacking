import { Component, OnInit } from '@angular/core';
import { AccountService} from './account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {

  }

  title = 'client';
  accountData = {
    username: '',
    password: '',
  }

  sendData() {
    this.accountService.createAccount(this.accountData)
      .subscribe(
        data => {
          window.location.href = 'http://iti.vnu.edu.vn/login';
        },
        error => {
          console.log(error);
        }
      )
  }
}
