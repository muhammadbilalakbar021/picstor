import { Component, OnInit } from '@angular/core';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FfeatureService } from './ffeature.service';

@Component({
  selector: 'app-fun-features',
  templateUrl: './fun-features.component.html',
  styleUrls: ['./fun-features.component.css'],
})
export class FunFeaturesComponent implements OnInit {
  constructor(private ffs: FfeatureService) {}

  ngOnInit(): void {}
  public files: NgxFileDropEntry[] = [];
  relativePath: String = '../../assets/Themes/';
  FileLoaded: boolean = false;
  convertedPic: any;
  isShow: Array<boolean> = [true, true, true, true, true, true];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.FileLoaded = true;
          
          for(let i = 0; i < 6; i++){
            if(i != 0){
              this.isShow[i] = false
            }
          }
          this.convertDog()
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

  public dropped1(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.FileLoaded = true;
          console.log(droppedFile.relativePath)

          for(let i = 0; i < 6; i++){
            if(i != 1){
              this.isShow[i] = false
            }
          }

          this.convertHatGlass()
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }


  public detectCartoonify(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.FileLoaded = true;
          console.log(droppedFile.relativePath)

          for(let i = 0; i < 6; i++){
            if(i != 4){
              this.isShow[i] = false
            }
          }

          this.convertCaroonify()
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public detectThermal(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.FileLoaded = true;
          console.log(droppedFile.relativePath)

          for(let i = 0; i < 6; i++){
            if(i != 3){
              this.isShow[i] = false
            }
          }

          this.convertThermal()
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }


  public detectSketch(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.FileLoaded = true;
          console.log(droppedFile.relativePath)

          for(let i = 0; i < 6; i++){
            if(i != 5){
              this.isShow[i] = false
            }
          }

          this.convertSketch()
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  async convertDog() {
    this.ffs.getDogFilter(this.files[0].relativePath).subscribe((res: any) => {
      console.log('called');
      this.convertedPic = res;
      console.log(this.convertedPic);
    });
  }

  async convertHatGlass() {
    this.ffs.getHatGlass(this.files[0].relativePath).subscribe((res: any) => {
      console.log('called');
      this.convertedPic = res;
      console.log(this.convertedPic);
    });
  }
  

  async convertCaroonify() {
    this.ffs.getCartoon(this.files[0].relativePath).subscribe((res: any) => {
      console.log('called');
      this.convertedPic = res;
      console.log(this.convertedPic);
    });
  }

  async convertThermal() {
    this.ffs.getthermal(this.files[0].relativePath).subscribe((res: any) => {
      console.log('called');
      this.convertedPic = res;
      console.log(this.convertedPic);
    });
  }

  async convertSketch() {
    this.ffs.getSketch(this.files[0].relativePath).subscribe((res: any) => {
      console.log('called');
      this.convertedPic = res;
      console.log(this.convertedPic);
    });
  }
}
