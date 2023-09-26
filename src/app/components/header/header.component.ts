import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import { NavServiceService } from 'src/app/services/nav-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen: boolean = false;
  sectionSelected:string = "inicio"

  optionSelected$:Observable<string> ;

  faBars = faBars;

  constructor(private navServices: NavServiceService) {
    this.optionSelected$ = this.navServices.navValue;
    this.optionSelected$.subscribe(value=> {
      this.sectionSelected = value
    })

  }

  openMenu() {
    this.menuOpen = !this.menuOpen
  }

  showOption(data:string) {
    this.menuOpen = !this.menuOpen;
    this.navServices.navValueData = data
  }

  selectSection(data:string) {
    this.navServices.navValueData = data

  }


}
