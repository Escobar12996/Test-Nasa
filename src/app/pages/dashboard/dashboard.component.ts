import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNasaService } from 'src/app/services/api-nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public apiNasa: ApiNasaService, private router: Router) {}
  list: any[] = [];
  date: Date = new Date();
  max = 6;

  ngOnInit(): void {

  }

  /*getApod(date: Date, count: number, reload?: boolean) {
    if (count === this.max) {
      return;
    }

    let dateV = new Date().setDate(date.getDate() - count);

    this.apiNasa.getSimple(new Date(dateV)).subscribe({
      next: (response) => {
        this.list.push(response);
        this.getApod(date, count + 1);
      },
      error: (error) => {
        if (reload === true) {
          this.list.push(null);
          this.getApod(date, count + 1);
        } else {
          this.getApod(date, count, true);
        }
      },
    });
  }*/

  next(item: any) {
    this.router.navigateByUrl('/details', {
      state: item,
    });
  }

}
