import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection, collectionData, query, updateDoc, deleteDoc } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL, deleteObject } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  storage = inject(AngularFireStorage);
  utilsSvc = inject(UtilsService);

  //================= AUTENTICACIÓN =================

  //autenticación para entrar a pagina HOME, solo si se esta dentro de una cuenta
  getAuth() {
    return getAuth();
  }

  //================= ACCEDER =================
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //================= CREAR USUARIO =================
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //================= ACTUALIZAR NOMBRE USUARIO =================
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

  //================= RESTABLECER CONTRASEÑA =================
  sendRecoveyEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  //================= CERRAR SESIÓN =================
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth');
  }

  //================= BASE DE DATOS =================

  //================= Obtener los elementos de la colección =================
  getCollectionData(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, ...collectionQuery), { idField: 'id' });
  }

  //================= Crear nuevo documento =================
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //================= Actualizar documento =================
  updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }

  //================= Eliminar documento =================
  deleteDocument(path: string) {
    return deleteDoc(doc(getFirestore(), path));
  }

  //================= Obtener un documento =================
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  //================= Agregar documento =================
  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }

  //================= Almacenamiento con firebase =================

  //Subir imagen
  async uploadImage(path: string, data_url: string) {
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
      return getDownloadURL(ref(getStorage(), path))
    })
  }

  //================= Obtener rutas de las imagenes con la URL =================
  async getFilePath(url: string) {
    return ref(getStorage(), url).fullPath;
  }

  //================= Eliminar archivos =================
  deleteFile(path: string) {
    return deleteObject(ref(getStorage(), path))
  }
}
