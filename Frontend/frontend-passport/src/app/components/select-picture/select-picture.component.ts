import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from 'src/app/service/link-service';

@Component({
  selector: 'app-select-picture',
  templateUrl: './select-picture.component.html',
  styleUrls: ['./select-picture.component.css']
})
export class SelectPictureComponent implements OnInit {

  link = ""
  error = ""
  checkmark1 = false
  checkmark2 = false
  checkmark3 = false
  checkmark4 = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private linkService: LinkService
  ) {
    this.linkService.link = this.link;
   }

  ngOnInit(): void {
  }

  redirect() {
    if(this.link === "") {
      return this.error = "Sie haben noch kein Bild ausgesucht"
    } else {
      this.router.navigate(['/createAccount'], {
        relativeTo: this.route
      });
    }
    return;
  }

  image1Clicked(): string {
    this.checkmark1 = true;
    this.checkmark2 = false;
    this.checkmark3 = false;
    this.checkmark4 = false;
    this.link = "../../../assets/Hund1.jpg";
    this.linkService.link = this.link;
    this.error = "";
    return this.linkService.link;
  }

  image2Clicked(): string {
    this.checkmark1 = false;
    this.checkmark2 = true;
    this.checkmark3 = false;
    this.checkmark4 = false;
    this.link = "../../../assets/Hund2.jpg";
    this.linkService.link = this.link;
    this.error = "";
    return this.linkService.link;
  }

  image3Clicked(): string {
    this.checkmark1 = false;
    this.checkmark2 = false;
    this.checkmark3 = true;
    this.checkmark4 = false;
    this.link = "../../../assets/Hund3.jpg";
    this.linkService.link = this.link;
    this.error = "";
    return this.linkService.link;
  }

  image4Clicked(): string {
    this.checkmark1 = false;
    this.checkmark2 = false;
    this.checkmark3 = false;
    this.checkmark4 = true;
    this.link = "../../../assets/Hund4.jpg";
    this.linkService.link = this.link;
    this.error = "";
    return this.linkService.link;
  }
}
