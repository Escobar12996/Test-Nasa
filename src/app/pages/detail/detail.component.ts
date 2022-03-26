import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  selected: any = null;

  constructor(private router: Router,private _location: Location) {
    if (this.router?.getCurrentNavigation()?.extras?.state !== undefined) {
      this.selected = this.router?.getCurrentNavigation()?.extras?.state;
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit(): void {
    console.log(this.selected);
  }

  back() {
    this._location.back();
    }
}
