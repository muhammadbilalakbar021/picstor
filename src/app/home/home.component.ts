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
    { img: "assets/images/p8.jpg" },
    { img: "assets/images/p2.jpg" },
    { img: "assets/images/p10.jpg" },
    { img: "assets/images/p4.jpg" },
    { img: "assets/images/p5.jpg" },
    { img: "assets/images/p6.jpg" },
    { img: "assets/images/p7.jpg" },
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 2, "autoplay": true, "autoplaySpeed": 1000, "speed": 3000, };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
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