import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText: string;
  // tslint:disable-next-line:no-trailing-whitespace
  constructor(private flexModal: FlexModalService) { 

  }

  ngOnInit() {
    this.aboutText = 'This application is designed by Alan Portillo. (c) 2018';
  }

  // Launch flex modal or alert (3pts reduced) showing about text:
    openAboutModal() {
      this.flexModal.openDialog('about-modal');
    }

}
