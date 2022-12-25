import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {IStudent} from "../../interfaces/i-student";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {isNgContent} from "@angular/compiler";
import {FirestoreModule} from "@angular/fire/firestore";

@Component({
  selector: 'app-page-student-list',
  templateUrl: './page-student-list.component.html',
  styleUrls: ['./page-student-list.component.css']
})
export class PageStudentListComponent implements OnInit{
  students: Array<IStudent> = []
  student: IStudent = {} as IStudent;
  isConfirmedDeleted: boolean = false;


  constructor(private studentService: StudentService,
              config: NgbModalConfig,
              private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  onCreateStudent(content: any) {
    // this.student.age = 20;
    // this.student.firstName = 'arya';
    // this.student.lastName = 'widhi';
    this.studentService.create(this.student)
      .then((data: any) => {
        this.modalService.open(content)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  onAll(): void {
    this.studentService.all()
      .subscribe(data =>
        this.students = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            firstName: e.payload.doc.data()['firstName'],
            lastName: e.payload.doc.data()['lastName'],
            age: e.payload.doc.data()['age']
          };
        })
      )
  }

  setStudent(student: IStudent) {
    this.student = JSON.parse(JSON.stringify(student))
  }

  cancel(){
    this.student = {} as IStudent;
  }
  onUpdate(id: string, student: IStudent){
    this.studentService.update(id,student)

  }

  onDelete(id: string){
    this.studentService.delete(id)
  }
ngOnInit():void {
    this.onAll()
}

}
