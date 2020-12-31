import { Component, OnInit, HostListener, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bgLight = false;
  bgColor: string = '';
  @ViewChild('menubutton') menubuttonElement: ElementRef;
  @ViewChild('menu') menuElement: ElementRef;
  @Input() elemtops: [];
  toggleClick() {
    this.bgColor = "rgb(2, 46, 82)";
  }
  //navigation



  public currentActive = 1;
  public homeOffset: Number = null;
  public aboutusOffset: Number = null;
  public servicesOffset: Number = null;
  public howItWorksOffset: Number = null;
  public faqOffset: Number = null;
  public contactusOffset: Number = null;
  public navbarheight;
  public comVar;


  ngAfterViewChecked() {
    if (document.getElementById("home") != null) {
      this.homeOffset = document.getElementById("home").offsetTop;
      this.aboutusOffset = document.getElementById("about-us").offsetTop;
      this.servicesOffset = document.getElementById("services").offsetTop;
      this.howItWorksOffset = document.getElementById("how-it-works").offsetTop;
      this.faqOffset = document.getElementById("faq").offsetTop;
      this.contactusOffset = document.getElementById("contact-us").offsetTop;
      this.aboutusOffset = document.getElementById("about-us").offsetTop;
      this.navbarheight = document.getElementById("navbarheight").offsetHeight;
    }
    if (window.location.href.indexOf('blog') > -1) { this.currentActive = 7; }
    else { this.currentActive = 1; }

  }
  scrollToElement(target) {
    //  alert(target);
    document.getElementById(target).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
<<<<<<< HEAD
=======
    console.log(this.elemtops);
>>>>>>> 8c361168c9abd60a94d7c54d32fe6c1d8542b6e6
    this.navbarheight = parseInt(this.navbarheight);
    this.comVar = window.pageYOffset + this.navbarheight;
    if (document.getElementById("home") != null) {

      if (this.comVar >= this.homeOffset && this.comVar < this.aboutusOffset) {
        this.currentActive = 1;
      } else if (this.comVar >= this.aboutusOffset && this.comVar < this.servicesOffset) {
        this.currentActive = 2;
      } else if (this.comVar >= this.servicesOffset && this.comVar < this.howItWorksOffset) {
        this.currentActive = 3;
      } else if (this.comVar >= this.howItWorksOffset && this.comVar < this.faqOffset) {
        this.currentActive = 4;
      } else if (this.comVar >= this.faqOffset && this.comVar < this.contactusOffset) {
        this.currentActive = 5;
      } else if (this.comVar >= this.contactusOffset) {
        this.currentActive = 6;
      } else { this.currentActive = 0; }

    }
    if (window.location.href.indexOf('blog') > -1) { this.currentActive = 7; }
  }




  toElem(elem) {
    console.log(elem);
  }


  constructor() { }
  @HostListener('document:scroll') scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.bgLight = true
    }
    else {
      this.bgLight = false
    }
  }
  ngOnInit(): void {
    console.log("In Header component");
    console.log(window.pageYOffset);
  }
  // menu disappears on clicking outside
  //window.onClick = this.myFunction;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.menubuttonElement.nativeElement.contains(event.target) == false) {
      //   this.menubuttonElement.nativeElement.click();
      this.menubuttonElement.nativeElement.getAttribute("aria-expanded");
      this.menubuttonElement.nativeElement.setAttribute("aria-expanded", "false");
      this.menubuttonElement.nativeElement.classList.add("collapsed");
      this.menuElement.nativeElement.classList.remove("show");
    }
  }


}
