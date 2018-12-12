import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HeaderService } from 'src/app/services/header.service';
import { AjaxCommService } from 'src/app/services/ajax-comm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  constructor(
    private headerService: HeaderService,
    private breakpointObserver: BreakpointObserver,
    private ajaxComm: AjaxCommService,
    private router: Router
  ) {
    this.headerService.titleSubject.next('Dashboard');
  }
}
