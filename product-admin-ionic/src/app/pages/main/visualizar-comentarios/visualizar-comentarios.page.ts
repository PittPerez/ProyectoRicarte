import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ComentariosService } from '../../../services/comentarios.service';

@Component({
  selector: 'app-visualizar-comentarios',
  templateUrl: './visualizar-comentarios.page.html',
  styleUrls: ['./visualizar-comentarios.page.scss'],
})
export class VisualizarComentariosPage implements OnInit {
  
  comments: any[] = [];

  constructor(private firestore: AngularFirestore, private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.firestore.collection('comments', ref => ref.orderBy('timestamp', 'desc')).valueChanges().subscribe(data => {
      this.comments = data;
    });
  }
}
