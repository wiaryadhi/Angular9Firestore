import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {PLAN, IAryalo} from "../interfaces/i-aryalo";

@Injectable({
  providedIn: 'root'
})
export class AryaloService {

  isShow: boolean = true;
  collection: string = "Tasks";
  constructor(private firestore: AngularFirestore) { }

  init(){
    let payload = {
      title: 'Your title here',
      description: 'Input description here',
      status: PLAN
    } as IAryalo;
    this.firestore.collection(this.collection).add(payload)
  }

  all(status: string){
    return this.firestore.collection(
      this.collection,
      ref => ref.where('status', '==',status)
    ).snapshotChanges()
  }

  update(id: string, task:IAryalo){
    return this.firestore.doc(`${this.collection}/`+ id)
      .update(task)
  }
}
