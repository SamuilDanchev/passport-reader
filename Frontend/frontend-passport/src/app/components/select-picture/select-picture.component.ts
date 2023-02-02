import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from 'src/app/service/link-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
    private linkService: LinkService,
    private http: HttpClient
  ) {
    this.linkService.link = this.link;
   }

  ngOnInit(): void {
  }
  selectedFile: File;

  uploadFile(event) {
    this.selectedFile = event.target.files[0];
  }

  sendFile() {
    const endpoint = 'http://127.0.0.1:5000/process';
    const formData = new FormData();
    debugger;
    formData.append('imagefile', this.selectedFile, this.selectedFile.name);

    this.http.post(endpoint, formData).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
  async redirect() {

    const endpoint = 'http://127.0.0.1:5000/process';
    const formData = new FormData();

    const file = await this.createFile('../../../assets/Ausweis2.jpg', 'Ausweis2.jpg', 'image/png')
    debugger;
    formData.append('imagefile', file, 'Ausweis2.jpg');

    this.http.post(endpoint, formData).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
/*     if(this.link === "") {
      return this.error = "Sie haben noch kein Bild ausgesucht"
    } else {
      this.router.navigate(['/createAccount'], {
        relativeTo: this.route
      });
    }
    return; */
  }
  async createFile(path: string, name: string, type: string): Promise<File> {
    let response = await fetch(path);
    let data = await response.blob();
    let metadata = {
        type: type
    };
    return new File([data], name, metadata);
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
