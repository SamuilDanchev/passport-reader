import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/service/link-service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private linkService: LinkService ) {}

  ngOnInit(): void {
    console.log(this.linkService.link);
  }

}
