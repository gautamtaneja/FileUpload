import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  fileToupload : File = null as any;
  constructor(private http : HttpClient) { 
  }

  ngOnInit(): void {
  }
  handelFileInput(event:any){
    console.log(event);
    this.fileToupload =  event.target.files[0];
    console.log(this.fileToupload)
  }
  OnSubmit(){
    const formData = new FormData();
    formData.append(this.fileToupload.name, this.fileToupload);
    const urltoUpload: string = 'https://localhost:44396/api/Upload';
    this.http.post(urltoUpload,formData).subscribe(res =>
      console.log(res)); 
  }

}
