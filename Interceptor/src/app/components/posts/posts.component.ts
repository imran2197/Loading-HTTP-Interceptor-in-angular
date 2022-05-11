import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsData = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.userService.getPosts().subscribe((res: any) => {
      this.postsData = res;
      console.log(res);
    })
  }
}
