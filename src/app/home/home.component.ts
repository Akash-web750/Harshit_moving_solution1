import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  happyCustomerImages: string[] = [
    'assets/images/photos/happy_custmor.png',
    'assets/images/photos/happy_custmore1.png',
    'assets/images/photos/happy_custmore3.png',
    'assets/images/photos/happy_custmore5.png'
  ];
  happyCustomerReviews: { text: string, author: string }[] = [
    { text: "Harshit Moving Solutions provided an excellent service. Our move was smooth and stress-free. Highly recommended!", author: "- Satisfied Client 1" },
    { text: "The team was professional and efficient. Everything arrived safely and on time. Great job!", author: "- Happy Customer 2" },
    { text: "I was very impressed with their packing and moving services. They handled everything with care.", author: "- Delighted User 3" },
    { text: "Affordable, reliable, and friendly service. I wouldn't hesitate to use them again.", author: "- Grateful Client 4" }
  ];
  currentHappyCustomerImage: string = '';
  currentHappyCustomerReview: { text: string, author: string } = { text: '', author: '' };
  currentImageIndex: number = 0;
  imageRotationInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.currentHappyCustomerImage = this.happyCustomerImages[0];
    this.currentHappyCustomerReview = this.happyCustomerReviews[0];
    this.startImageRotation();
  }

  startImageRotation(): void {
    this.imageRotationInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.happyCustomerImages.length;
      this.currentHappyCustomerImage = this.happyCustomerImages[this.currentImageIndex];
      this.currentHappyCustomerReview = this.happyCustomerReviews[this.currentImageIndex];
    }, 2000); // Change image and review every 2 seconds
  }

  ngOnDestroy(): void {
    if (this.imageRotationInterval) {
      clearInterval(this.imageRotationInterval);
    }
  }
}