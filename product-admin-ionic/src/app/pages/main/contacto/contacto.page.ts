import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'; // Importa Router

// Declarar google globalmente
declare var google: any;
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  
  commentName: string = '';
  commentText: string = '';
    map: null;

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.loadMap();
    
  }
   loadMap() {
    // Inicializar mapa
    const mapEle: HTMLElement = document.getElementById('map');
    // Obtener comentarios de la base de datos Firebase
    const myLatLng = { lat: 31.614398613740573, lng: -106.40512527498704 };
    const map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

       google.maps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
        const marker = {
            position: {
                lat: 31.614398613740573,
                lng: -106.40512527498704
            },
            title: 'Dulce sabor'
        }
        this.addMarker(marker);
    });
    }
    addMarker(marker: Marker) {
        return new google.maps.Marker({
            position: marker.position,
            map: this.map,
            title: marker.title
  });
}

  submitComment() {
    // Guardar comentario en Firebase
    this.firestore.collection('comments').add({
      name: this.commentName,
      text: this.commentText,
      timestamp: new Date()
    }).then(() => {
      // Limpiar campos después de enviar el comentario
      this.commentName = '';
      this.commentText = '';
    }).catch(error => {
      console.error('Error al enviar el comentario:', error);
    });
  }
  verComentarios() {
    this.router.navigate(['/visualizar-comentarios']);
  }
}