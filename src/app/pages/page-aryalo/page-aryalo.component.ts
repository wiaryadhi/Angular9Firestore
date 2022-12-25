import {Component, OnInit} from '@angular/core';
import {AryaloService} from "../../services/aryalo.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-page-aryalo',
  templateUrl: './page-aryalo.component.html',
  styleUrls: ['./page-aryalo.component.css']
})
export class PageAryaloComponent implements OnInit{

  constructor(public navbar: AryaloService,
          ) {

  }

  ngOnInit() {
    this.navbar.isShow = true;
  }



}
