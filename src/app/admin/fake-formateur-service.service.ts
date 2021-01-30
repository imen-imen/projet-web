import { Injectable } from '@angular/core';
import { Formateur } from './formateur';
import { FORMATEURITEMS } from './formateurs';

@Injectable({
  providedIn: 'root'
})
export class FakeFormateurServiceService {

  constructor() { }
  get() {return FORMATEURITEMS;}
  add(formateurItem: Formateur) {
    formateurItem.id = FORMATEURITEMS.length + 1;
    FORMATEURITEMS.push(formateurItem);
    }

    delete(formateurItem: Formateur) {
      let index;
      index = FORMATEURITEMS.indexOf(formateurItem);
      if (FORMATEURITEMS.indexOf(formateurItem) >= 0) {
        FORMATEURITEMS.splice(index, 1);
      }
      }

      getSession(id: number) {
        return FORMATEURITEMS[id - 1];
        }
}
