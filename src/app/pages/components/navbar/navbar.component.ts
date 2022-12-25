import {Component, OnInit} from '@angular/core';
import {AryaloService} from "../../../services/aryalo.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public aryaloService: AryaloService) {
  }

  ngOnInit() {
  }

  onInit(){
    this.aryaloService.init()
  }
}
