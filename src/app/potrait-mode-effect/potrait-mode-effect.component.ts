import { Component, OnInit } from '@angular/core';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef, ViewChild } from '@angular/core';
import { PmeService } from './pme.service'


@Component({
  selector: 'app-potrait-mode-effect',
  templateUrl: './potrait-mode-effect.component.html',
  styleUrls: ['./potrait-mode-effect.component.css']
})
export class PotraitModeEffectComponent implements OnInit {
  viewHeight: any;
  elementView: any;

  constructor(private pme: PmeService, private domSanitizer: DomSanitizer) { }

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
    this.pme.getPotraiedEffectImage(this.files[0].relativePath).subscribe((res) => {
      console.log('called');
      this.convertedPic = this.domSanitizer.bypassSecurityTrustUrl(res);
    });
  }
}
