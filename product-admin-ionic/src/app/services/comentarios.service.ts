import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private firestore: AngularFirestore) { }

  loadComments() {
    return this.firestore.collection('comments', ref => ref.orderBy('timestamp', 'desc')).valueChanges();
  }

  submitComment(name: string, text: string) {
    return this.firestore.collection('comments').add({
      name,
      text,
      timestamp: new Date()
    });
  }
}
