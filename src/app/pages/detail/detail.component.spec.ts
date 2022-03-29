import { DashboardComponent } from './../dashboard/dashboard.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailComponent } from './detail.component';
import { ComponentsModule } from 'src/app/components/components.module';

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          copyright: 'Carlos Kiko Fairbairn',
          date: '2022-03-29',
          explanation:
            'When two planets pass on the night sky, they can usually be seen near each other for a week or more. In the case of this planetary conjunction, Venus and Mars passed within 4 degrees of each other earlier this month. The featured image was taken a few days prior, when Venus was slowing rising in the pre-dawn sky, night by night, while Mars was slowly setting. The image, a four-part mosaic, was captured in Brazil from the small town Teresópolis. Besides Venus and Mars, the morning sky now also includes the more distant planet Saturn.  Of course, these conjunctions are only angular -- Venus, Mars, and Saturn continue to orbit the Sun in very different parts of our Solar System.  Next week, the angle between Saturn and Mars will drop to below a quarter of a degree.',
          hdurl:
            'https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_1433.jpg',
          media_type: 'image',
          service_version: 'v1',
          title: 'Venus and Mars: Passing in the Night',
          url: 'https://apod.nasa.gov/apod/image/2203/VenusMars_Fairbairn_960.jpg',
        },
      },
    };
  }
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ComponentsModule],
      providers: [{ provide: Router, useClass: RouterStub }],
      declarations: [DetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
