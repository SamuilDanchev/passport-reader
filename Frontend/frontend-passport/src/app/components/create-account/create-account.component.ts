import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { LinkService } from 'src/app/service/link-service';
import { Person } from '../person.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class CreateAccountComponent implements OnInit {

  link = ""
  qrData = ''
  firstname = ""
  lastname = ""
  birthday = ""

  constructor(
    private linkService: LinkService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
  }

  ngOnInit(): void {
    this.link = this.linkService.link;
    var data: Person = JSON.parse(this.route.snapshot.paramMap.get('data'));
    this.firstname = data.first_name
    this.lastname = data.last_name;
    this.birthday = data.date_of_birth;
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
    console.log(this.qrData)
    console.log(this.router.url)
  }

}
