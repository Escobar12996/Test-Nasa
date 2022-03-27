import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNasaService } from 'src/app/services/api-nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  list: any = null;
  date: Date = new Date();
  max = 6;
  error = false;

  constructor(public apiNasa: ApiNasaService, private router: Router) {}

  ngOnInit() {
    this.getApod(
      new Date(new Date().setDate(this.date.getDate() - 6)),
      this.date
    );
  }

  getApod(startDate: Date, endDate: Date) {
    this.apiNasa.getApodStartEnd(startDate, endDate).subscribe({
      next: (response) => {
        this.list = response;
        this.list = this.list.reverse();
      },
      error: (error) => {
        this.error = true;
      },
    });
  }

  //este metodo busca de uno en uno, no es lo recomendable, pero lo hecho asi por que de esta manera es la que esta puesta en el pdf
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
