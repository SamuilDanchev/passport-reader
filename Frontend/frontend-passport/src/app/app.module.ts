import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPictureComponent } from './components/select-picture/select-picture.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkService } from './service/link-service';

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
    MatButtonModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
