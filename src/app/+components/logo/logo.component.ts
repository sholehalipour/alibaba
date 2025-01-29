import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  more: boolean = false;
  eghamat: boolean = false;
  ticket: boolean = false;
  ticketon() {
    this.ticket = !this.ticket;
  }
  eghamaton() {
    this.eghamat = !this.eghamat;
  }
  moreon() {
    this.more =!this.more;
  }
}
