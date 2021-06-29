import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IpqService } from './ipq.service'

@Component({
  selector: 'app-improved-picture-quality',
  templateUrl: './improved-picture-quality.component.html',
  styleUrls: ['./improved-picture-quality.component.css']
})
export class ImprovedPictureQualityComponent implements OnInit {

  constructor(private ipq:IpqService) { }

  ngOnInit(): void {
  }
  public files: NgxFileDropEntry[] = [];
  relativePath: String = "../../assets/Themes/"
  FileLoaded:boolean = false
  convertedPic:any

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.FileLoaded = true

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          // const formData = new FormData()
          // formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any) {
    // console.log(event);
  }

  public fileLeave(event: any) {
    // console.log(event);
  }

 async check(){
  this.ipq.chechkHello()
  .subscribe(res =>{
    console.log('called')
    this.convertedPic = res
    console.log(this.convertedPic)
  })
 }


}
