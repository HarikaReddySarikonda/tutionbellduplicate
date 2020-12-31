import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {HomeComponent} from '../body/home/home.component'
import {BlogListComponent} from '../body/blogList/blogList.component'


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }

  public elemtops = [] ;

  @Input() elemtops2;
  @Output() event: EventEmitter<any> = new EventEmitter();
  @ViewChild(HomeComponent) home: HomeComponent;
  @ViewChild(BlogListComponent) blog: BlogListComponent;

  

  ngAfterViewChecked(){
    this.elemtops.push(this.home.home.nativeElement.offsetTop);
    this.elemtops.push(this.home.aboutus.nativeElement.offsetTop);
    this.elemtops.push(this.home.services.nativeElement.offsetTop);
    this.elemtops.push(this.home.howitworks.nativeElement.offsetTop);
    this.elemtops.push(this.home.faq.nativeElement.offsetTop);
    this.elemtops.push(this.home.contactus.nativeElement.offsetTop);
    this.event.emit(true);
  }
  
  
  backToTop() {
    document.documentElement.scrollTop = 0;
  }

  get scrollTopArrow(){
    return   document.documentElement.scrollTop ;
  }
}
