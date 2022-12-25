import {Component, OnInit} from '@angular/core';
import {AryaloService} from "../../../services/aryalo.service";
import {DONE, IAryalo, PLAN, TODO} from "../../../interfaces/i-aryalo";

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnInit{

  tasks: IAryalo[] = [];
  statusTODO: string = TODO;
  statusDONE: string = DONE;

  constructor(private aryaloService: AryaloService) {
  }

  onALl(): void {
    this.aryaloService.all(PLAN).subscribe(
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
