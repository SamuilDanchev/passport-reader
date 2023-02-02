import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPictureComponent } from './components/select-picture/select-picture.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkService } from './service/link-service';
import { QRCodeModule } from 'angularx-qrcode';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SelectPictureComponent,
    CreateAccountComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    QRCodeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
