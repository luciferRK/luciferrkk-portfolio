import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {


  mailMe:String = "mailto:likhithraj10@gmail.com";
  github:String="https://www.github.com/luciferRK";    
  twitter:String="https://www.twitter.com/lucifer_rk";  
  insta:String="https://www.instagram.com/lucifer_rk_";
  linkedin:String="https://www.linkedin.com/in/likhith-rk";

  
  constructor() {
      this.loadScript();
  }



  loadScript(){
    const scripts=[
      "../../assets/js/jquery.min.js",
      "../../assets/js/jquery-migrate-3.0.1.min.js",
      "../../assets/js/popper.min.js",
      "../../assets/js/bootstrap.min.js",
      "../../assets/js/jquery.easing.1.3.js",
      "../../assets/js/jquery.waypoints.min.js",
      "../../assets/js/jquery.stellar.min.js",
      "../../assets/js/owl.carousel.min.js",
      "../../assets/js/jquery.magnific-popup.min.js",
      "../../assets/js/aos.js",
      "../../assets/js/jquery.animateNumber.min.js",
      "../../assets/js/scrollax.min.js",
      "../../assets/js/bootstrap-datepicker.js",
      "../../assets/js/jquery.timepicker.min.js",
      // "../../assets/js/google-map.js",
      "../../assets/js/main.js",
      "../../assets/js/typed.js",
      "../../assets/js/typed.min.js"
    ];
    for (let i = 0; i < scripts.length; i++) {
      const node = document.createElement('script'); 
      node.src = scripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
  }


  ngOnInit(): void {
  }

}
