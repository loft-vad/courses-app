import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoPath = "/assets/logo.svg"

  logoAlt = "Homepage"

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    console.log('courseId: ', courseId);
    // this.course$ = this.service.getCourse(courseId);
  }

}
