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
import { Projects } from "../model/projects";
import { EmailService } from '../service/email.service';

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
  projectsArray: Array<Projects>
  email: string;
  subject: string;
  message: string;


  constructor(private emailService: EmailService) { }

  ngOnInit(): void {

    this.projectsArray = this.createProjects();
    console.log(this.projectsArray)


    $(window).on('resize', () => {
      this.wasClicked = this.wasClicked;
      var win = $(window);
      if (win.width() <= 767) {
        $("#wrapper").removeClass('menuDisplayed');
        this.wasClicked = false;
        console.log(this.wasClicked);
      }
    })

    $(window).scroll(function() {
  
      var $window = $(window),
          $body = $('#wrapper'),
          $panel = $('.panel');
      
      var scroll = $window.scrollTop() + ($window.height() / 3);
     
      $panel.each(function () {
        var $this = $(this);
        
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
              
          $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
          });
           
          $body.addClass('color-' + $(this).data('color'));
        }
      });    
      
    }).scroll();
  }

  onClick(): void {
    this.wasClicked = !this.wasClicked;
    console.log(this.wasClicked)
  }

  createProjects(): Array<Projects> {
    let projectsArray = new Array<Projects>();

    let projects = new Projects();
    projects.imageURL = "/assets/emuLadderBackground.png";
    projects.title = "emuLadder";
    projects.description = "emuLadder is a fantasy esports game similar to Fantasy Football, Hockey, etc. emuLadder was built using Angular, Spring Boot, NodeJS, and MySQL.";
    projects.type = "Senior Capstone";
    projects.projectURL = "https://github.com/CapstoneUNCG2020/emuLadder";

    projectsArray.push(projects);

    projects = new Projects();
    projects.imageURL = "/assets/books.jpg";
    projects.title = "ReadingLogger";
    projects.description = "ReadingLogger is a fun way to keep track of interesting data from the books that you have read. ReadingLogger was built with Django/Python.";
    projects.type = "Personal Project";
    projects.projectURL = "https://github.com/rhmeyer314/ReadingLogger";

    projectsArray.push(projects);

    projects = new Projects();
    projects.imageURL = "/assets/task.jpg";
    projects.title = "SMS Reminder";
    projects.description = "SMS Reminder is a web app where you can create a task list and recieve text messages as a reminder. SMS Reminder was built using Spring Boot/Java and the Twilio API.";
    projects.type = "Personal Project";
    projects.projectURL = "https://github.com/rhmeyer314/SmsReminder";

    projectsArray.push(projects);

    return projectsArray;
  }

  createEmail(): void {
    let promise = this.emailService.sendEmail(this.email, this.subject, this.message);
  }
}
