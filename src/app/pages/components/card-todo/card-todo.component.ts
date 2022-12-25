import {Component, OnInit} from '@angular/core';
import {DONE, IAryalo, PLAN, TODO} from "../../../interfaces/i-aryalo";
import {AryaloService} from "../../../services/aryalo.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent implements OnInit{
  tasks: IAryalo[] = [];
  statusPLAN:string = PLAN;
  statusDONE:string = DONE;

  constructor(private aryaloService: AryaloService,
              config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  onALl(): void {
    this.aryaloService.all(TODO).subscribe(
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
  open(content: any) {
    this.modalService.open(content);
  }
}
