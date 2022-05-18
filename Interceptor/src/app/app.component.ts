import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { UserIdleService } from 'angular-user-idle';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptor';
  sessionTime: number = 60;
  timeCount: number | undefined;

  constructor(private userIdle: UserIdleService, 
    private router: Router){}

  ngOnInit(){
    this.sessionCheck();
  }

  sessionCheck() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.userIdle.startWatching();
        this.userIdle.onTimerStart().subscribe((count) => {
          this.timeCount = this.sessionTime - count;
          if(this.timeCount === 0){
            this.userIdle.stopTimer();
          }
        });
      }
    })
  }
  
}
