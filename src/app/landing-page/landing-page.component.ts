import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
  wasClicked = false;


  constructor() { }

  ngOnInit(): void {
    $(window).on('resize', () => {
      this.wasClicked = this.wasClicked;
      var win = $(window);
      if (win.width() <= 768) {
        $("#wrapper").removeClass('menuDisplayed');
        this.wasClicked = false;
        console.log(this.wasClicked);
      }
    })

    // $(window).on('resize', () => {  
    //   var win = $(window);
    //   if (win.width < 768) {
    //     $('#wrapper').removeClass('menuDisplayed');
    //     this.wasClicked = false;
    //   }
    // });
  }

  onClick(): void {
    this.wasClicked = !this.wasClicked;
    console.log(this.wasClicked)
  }


}
