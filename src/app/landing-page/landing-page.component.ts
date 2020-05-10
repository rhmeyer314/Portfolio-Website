import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  faBars = faBars;
  faHome = faHome;
  faTh = faTh;
  faUser = faUser;
  faFile = faFile;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  wasClicked = false;


  constructor() { }

  ngOnInit(): void {
    $(window).on('resize', () => {
      this.wasClicked = this.wasClicked;
      var win = $(window);
      if (win.width() <= 767) {
        $("#wrapper").removeClass('menuDisplayed');
        this.wasClicked = false;
        console.log(this.wasClicked);
      }
    })
  }

  onClick(): void {
    this.wasClicked = !this.wasClicked;
    console.log(this.wasClicked)
  }
}
