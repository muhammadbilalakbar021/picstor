import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { AuthorizationService } from './authorization.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private user: AuthorizationService, private modalService: BsModalService) {}
  

  errorEmail: boolean;
  loggedIn: boolean = true;

  ngOnInit(): void {}

  async Login(email: String, password: String) {
    this.user.chechkLogin(email, password);
  }

  async Signup(Name:String, Email:String, Password:String){

  }

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
