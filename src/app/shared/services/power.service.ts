import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Power } from '../models/Power';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  collectionName = 'Powers';

  constructor(private afs: AngularFirestore) { }

  create(power: Power) {
    power.id = this.afs.createId();
    return this.afs.collection<Power>(this.collectionName).doc(power.id).set(power);
  }

  getAll() {
    return this.afs.collection<Power>(this.collectionName).valueChanges();
  }

  update(power: Power) {
    return this.afs.collection<Power>(this.collectionName).doc(power.id).set(power);
  }

  delete(id: string) {
    return this.afs.collection<Power>(this.collectionName).doc(id).delete();
  }

  getPowerByUserId(id: string) {
    return this.afs.collection<Power>(this.collectionName, ref => ref.where('uid', '==', id).orderBy('dateFrom', 'asc')).valueChanges();
  }
}
