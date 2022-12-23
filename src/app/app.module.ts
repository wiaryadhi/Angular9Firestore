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
import { CardPlanComponent } from './pages/components/card-plan/card-plan.component';
import { CardTodoComponent } from './pages/components/card-todo/card-todo.component';
import { CardDoneComponent } from './pages/components/card-done/card-done.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { PageAryaloComponent } from './pages/page-aryalo/page-aryalo.component';

@NgModule({
  declarations: [
    AppComponent,
    PageStudentListComponent,
    CardPlanComponent,
    CardTodoComponent,
    CardDoneComponent,
    NavbarComponent,
    PageAryaloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyCWXT62V8elo9joI6HsmlIYbNT4tGqC2n4",
        authDomain: "arya-firestore.firebaseapp.com",
        databaseURL: "https://arya-firestore-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "arya-firestore",
        storageBucket: "arya-firestore.appspot.com",
        messagingSenderId: "825131080855",
        appId: "1:825131080855:web:7a0c88f337f84dec77ddd2"
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
