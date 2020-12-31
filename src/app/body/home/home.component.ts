import { Component, OnInit } from '@angular/core';
import { MyAnimation } from '../../util/animationUtil';
import { howItWorksAni } from '../../util/animationUtil';

// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContentReader } from '../../util/ContentReader';
import { NgForm } from '@angular/forms';
import { Helper } from '../../util/Helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation, howItWorksAni]
})
export class HomeComponent implements OnInit {

  constructor(private _contentReader: ContentReader) { }

  ngOnInit(): void {
    this.mobile = Helper.isMobile();
  }
 
  private mobile = false;

  get isMobile(): boolean {
    return this.mobile;
  }
  
  //About Us
  aboutUs = this._contentReader.getAboutUsData();

  //how-It-Works
  public howItWorks = this._contentReader.getHowItWorksData();
  public studentFlow = this.howItWorks[1];
  public tutorFlow = this.howItWorks[0];

  // Home Carousel
  public homeData = this._contentReader.getHomeData();


  // Services
  public selectedIndex = 0;
  public serviceData = this._contentReader.getserviceData();
  showTab(index, data) {
    this.selectedIndex = index;
  }

  // faq
  student_faq = this._contentReader.getFaqData()[0];
  tutor_faq = this._contentReader.getFaqData()[1];

  // The
  member = this._contentReader.getTeamInfo();

  //contact Us
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  // sendEmail(e: Event) {
  //   console.log("email");
  //   e.preventDefault();
  //   // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
  //   //   .then((result: EmailJSResponseStatus) => {
  //   //     console.log(result.text);
  //   //   }, (error) => {
  //   //     console.log(error.text);
  //   //   });
  // }

  // how it works
  tutor = true;
  student = true;
  positionStu = "center";
  arrow = false;
  step = false;
  positiontutor = "center";


  showStudent() {
    this.tutor = false;
    this.positionStu = "left";
    this.arrow = true;
    this.step = true;
  }

  showtutor() {
    this.student = false;
    this.positiontutor = "left";
    this.arrow = true;
    this.step = true;
  }

}
