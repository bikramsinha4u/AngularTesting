import { TestBed } from '@angular/core/testing';
import { SvcCarService } from './svc-car.service';

describe('SvcCarService', () => {
  let service: SvcCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvcCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

var output: string = '';
var obj = {
  log: (msg: string) => { console.log(msg); },
  getdetails: (id: string) => {
    output = `Details for person with id=${id}`
    obj.log(id);
    return 'hi';
  }
};

describe('obj', function () {
  //   beforeEach(() => {
  //     spyOn(obj, 'log');
  //     spyOn(obj, 'getdetails');
  // });

  it('spy obj on log and getdetails', function () {

    spyOn(obj, 'log');
    spyOn(obj, 'getdetails').and.returnValue('hi');

    obj.log('1');
    expect(obj.log).toHaveBeenCalled();
    expect(obj.log).toHaveBeenCalledWith('1');

    obj.getdetails('2');
    expect(obj.getdetails).toHaveBeenCalled();
    expect(obj.getdetails).toHaveBeenCalledWith('2');
    expect(obj.getdetails('2')).toEqual('hi');
  })

  it('spy obj on log and getdetails', function () {

    spyOn(obj, 'log');

    obj.getdetails('1');
    expect(obj.log).toHaveBeenCalled();
    expect(obj.log).toHaveBeenCalledWith('1');
  })
});