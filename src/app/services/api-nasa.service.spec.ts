import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiNasaService } from './api-nasa.service';
import { ApiNasaTestService } from './api-nasa.test.service.spec';

describe('ApiNasaService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiNasaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test response simple', () => {
    service.getSimple(new Date(ApiNasaTestService.dateStringSimple)).subscribe((response) => {
      expect(response).toEqual(ApiNasaTestService.testSimple);
    });

    const request = httpTestingController.expectOne(ApiNasaTestService.testSimpleApiUrl);
    expect(request.request.method).toEqual('GET');
    expect(request.flush(ApiNasaTestService.testSimple));
  });

  it('test response doble', () => {
    service.getApodStartEnd(new Date(ApiNasaTestService.dateStringDoubleTwo), new Date(ApiNasaTestService.dateStringDoubleOne)).subscribe((responsetest) => {
      expect(responsetest).toEqual(ApiNasaTestService.testTwo);
    });

    const request2 = httpTestingController.expectOne(ApiNasaTestService.testTwoApiUrl);
    expect(request2.request.method).toEqual('GET');
    expect(request2.flush(ApiNasaTestService.testTwo));
  });
});
