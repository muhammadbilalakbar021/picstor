import { Component, OnInit } from '@angular/core';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef, ViewChild } from '@angular/core';
import { FfeService } from './ffe.service'

@Component({
  selector: 'app-facial-features-editing',
  templateUrl: './facial-features-editing.component.html',
  styleUrls: ['./facial-features-editing.component.css']
})
export class FacialFeaturesEditingComponent implements OnInit {
  @ViewChild('mainScreen', { read: ElementRef, static: false })
  elementView: ElementRef;
  viewHeight: number;

  constructor(private ffe: FfeService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  public files: NgxFileDropEntry[] = [];
  relativePath: String = "../../assets/Themes/"
  convertedPic: any;
  FileLoaded: boolean = false;



  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.FileLoaded = true;

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

  timePeriods = [
    'Bronze age',
    'Iron age'
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }


  // To calculate the height of element
  public CheckHeight() {
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    console.log(this.viewHeight);
  }

  async check() {
    this.ffe.getFacialFeatureEdiedImage(this.files[0].relativePath).subscribe((res) => {
      console.log('called');
      this.convertedPic = this.domSanitizer.bypassSecurityTrustUrl(res);
    });
  }
}