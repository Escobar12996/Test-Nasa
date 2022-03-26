import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  selected: any = null;

  constructor(private router: Router) {
    if (this.router?.getCurrentNavigation()?.extras?.state !== undefined) {
      this.selected = this.router?.getCurrentNavigation()?.extras?.state;
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit(): void {
    console.log(this.selected);
  }
}
