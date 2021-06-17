import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "https://mdbootstrap.com/img/Photos/Others/images/48.jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Others/images/50.jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Others/images/30.jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Others/images/29.jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Others/images/27.jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Others/images/51.jpg"},
    {img: "https://mdbootstrap.com/img/Photos/Others/images/54.jpg"},
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 2, "autoplay": true, "autoplaySpeed": 1000, "speed": 3000,};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }
}