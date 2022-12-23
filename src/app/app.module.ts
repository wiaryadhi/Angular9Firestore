import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { PageStudentListComponent } from './pages/page-student-list/page-student-list.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageStudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyBjPP77PsHRn0GKJ0MiqIEEDSAYHyqMrAw",
        authDomain: "oncom-berry.firebaseapp.com",
        databaseURL: "https://oncom-berry-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "oncom-berry",
        storageBucket: "oncom-berry.appspot.com",
        messagingSenderId: "291322685143",
        appId: "1:291322685143:web:ad7ce66eadecd7c0fd7292"
      }
    ),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
