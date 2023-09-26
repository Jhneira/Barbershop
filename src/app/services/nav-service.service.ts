import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  private navObservable: BehaviorSubject<string> =
  new BehaviorSubject<string>("");

  get navValue () {
    return this.navObservable.asObservable()
  }

  set navValueData (data:string) {
    this.navObservable.next(data)
  }
}
