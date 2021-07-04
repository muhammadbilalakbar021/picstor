import { Component, OnInit } from '@angular/core';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IpqService } from './ipq.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-improved-picture-quality',
  templateUrl: './improved-picture-quality.component.html',
  styleUrls: ['./improved-picture-quality.component.css'],
})
export class ImprovedPictureQualityComponent implements OnInit {
  @ViewChild('mainScreen', { read: ElementRef, static: false })
  elementView: ElementRef;
  viewHeight: number;

  constructor(private ipq: IpqService, private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  public files: NgxFileDropEntry[] = [];
  relativePath: String = '../../assets/Themes/';
  FileLoaded: boolean = false;
  convertedPic: any;

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
    // console.log(event);
  }

  public fileLeave(event: any) {
    // console.log(event);
  }

  // To calculate the height of element
  public CheckHeight() {
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    console.log(this.viewHeight);
  }

  async check() {
    this.ipq.getImprovedImage(this.files[0].relativePath).subscribe((res) => {
      console.log('called');
      this.convertedPic = this.domSanitizer.bypassSecurityTrustUrl(res);
    });
  }
}
