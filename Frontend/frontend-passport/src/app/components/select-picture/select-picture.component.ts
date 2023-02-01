import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) { }

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

  image1Clicked(): void {
    this.checkmark1 = true;
    this.checkmark2 = false;
    this.checkmark3 = false;
    this.checkmark4 = false;
    this.link = "../../../assets/Hund1.jpg";
    this.error = ""
  }

  image2Clicked() {
    this.checkmark1 = false;
    this.checkmark2 = true;
    this.checkmark3 = false;
    this.checkmark4 = false;
    this.link = "../../../assets/Hund2.jpg";
    this.error = ""
  }

  image3Clicked() {
    this.checkmark1 = false;
    this.checkmark2 = false;
    this.checkmark3 = true;
    this.checkmark4 = false;
    this.link = "../../../assets/Hund3.jpg";
    this.error = ""
  }

  image4Clicked() {
    this.checkmark1 = false;
    this.checkmark2 = false;
    this.checkmark3 = false;
    this.checkmark4 = true;
    this.link = "../../../assets/Hund4.jpg";
    this.error = ""
  }
}
