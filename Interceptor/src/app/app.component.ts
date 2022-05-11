import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptor';
  constructor(private userService: UsersService){}

  ngOnInit(){
    this.getPosts();
    // this.getUsers();
  }

  getPosts(){
    this.userService.getPosts().subscribe((res: any) => {
      console.log(res);
    })
  }
  
  getUsers(){
    this.userService.getUsers().subscribe((res: any) => {
      console.log(res);
    })
  }
}
