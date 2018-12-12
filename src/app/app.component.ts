import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { HeaderService } from './services/header.service';
import { AuthenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PodTracker';

  @ViewChild(MatSidenav) drawer: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private headerService: HeaderService,
    public auth: AuthenticationService
  ) {
    headerService.titleSubject.subscribe(title => {
      this.title = title;
    });
  }

  toggleMenu() {
    this.isHandset$.pipe(take(1)).subscribe(matches => {
      if (matches) {
        this.drawer.toggle();
      }
    });
  }

  logout() {
    this.router.navigate(['/browse']);
  }
}
