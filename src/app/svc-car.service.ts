import { Injectable } from '@angular/core';
import { SvcEngineService } from './svc-engine.service';

@Injectable({
  providedIn: 'root'
})
export class SvcCarService {
  public make: string = '';
  private carCost: number = 0;

  constructor(private engineService: SvcEngineService) { }


}
