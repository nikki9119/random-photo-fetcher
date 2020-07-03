import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent implements OnInit {

  photoUrl:string;

  constructor(private photofetch:PhotoFetchService) { 
    this.getPhoto();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.getPhoto();
  }

  getPhoto(){
    this.photofetch.fetchPhoto().subscribe((response)=>{
      this.photoUrl = response.urls.regular;
    });
  }

}
