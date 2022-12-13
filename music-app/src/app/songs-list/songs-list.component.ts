import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  

  ngOnInit(): void {
  }
  data: any;
 
  getData(){
    this.httpClient.get('http://localhost:3000/api/v1/songs').subscribe((data) => {
      this.data = data;
            console.log(data);
        });
  }
 
  

}
