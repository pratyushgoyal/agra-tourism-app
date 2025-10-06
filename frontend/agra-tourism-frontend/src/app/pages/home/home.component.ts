import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const hero = document.querySelector('.hero');
        const planner = document.querySelector('.planner-section');
        if (hero) {
          gsap.to(hero, {
            opacity: 0,
            y: -100,
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          });
        }
        if (planner) {
          gsap.from(planner, {
            opacity: 0,
            y: 100,
            scrollTrigger: {
              trigger: planner,
              start: 'top bottom',
              end: 'center center',
              scrub: true
            }
          });
        }
      });
    }
  }
}