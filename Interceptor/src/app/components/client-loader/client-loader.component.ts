import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-client-loader',
  templateUrl: './client-loader.component.html',
  styleUrls: ['./client-loader.component.css']
})
export class ClientLoaderComponent implements OnInit {

  loader$: Observable<any> | undefined;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    console.log("Loading Data");
    this.loader$ = this.loaderService.loader;
  }

}
