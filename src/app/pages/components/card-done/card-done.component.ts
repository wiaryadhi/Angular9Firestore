import {Component, OnInit} from '@angular/core';
import {DONE, IAryalo, PLAN, TODO} from "../../../interfaces/i-aryalo";
import {AryaloService} from "../../../services/aryalo.service";

@Component({
  selector: 'app-card-done',
  templateUrl: './card-done.component.html',
  styleUrls: ['./card-done.component.css']
})
export class CardDoneComponent implements OnInit{
  tasks: IAryalo[] = [];
  statusPLAN:string = PLAN;
  statusTODO:string = TODO;

  constructor(private aryaloService: AryaloService) {
  }

  onALl(): void {
    this.aryaloService.all(DONE).subscribe(
      (data: any) => {
        this.tasks = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            title: e.payload.doc.data()['title'],
            description: e.payload.doc.data()['description'],
            status: e.payload.doc.data()['status']
          }
        })
        console.log(this.tasks)
      }
    )
  }

  onUpdate(id: string, task:IAryalo,){
    this.aryaloService.update(id,task)
  }
  ngOnInit() {
    this.onALl()
  }

}
