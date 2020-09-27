import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  public email: any;

  constructor(public authServ: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }

  onLogout(): void {
    this.authServ.logout();
    this.route.navigate([''])
  }
}
