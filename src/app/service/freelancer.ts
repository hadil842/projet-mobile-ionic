import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Freelancer {
   nomfreel:string="";

     constructor(private http:HttpClient){}

     creerfreelancer(data:any):Promise<number>{
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return new Promise((resolve, reject) => {
      this.http.post('http://127.0.0.1:5000/signfreelancer', data,{headers}).subscribe({
       next: (response) => {
        console.log("Compte cree avec succes", response);
        resolve(1);
      },
      error: (err) => {
        console.error("Erreur du creation", err);
        reject(0);
      }
    });});
  }
     setnamefreelancer(nom:string){
           this.nomfreel=nom;
     }
     loginfreelancer(data:any):Promise<number>{
       const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return new Promise((resolve, reject) => {
      this.http.post('http://127.0.0.1:5000/loginfreelancer', data,{headers}).subscribe({
      next: (response) => {
        console.log("Connexion reussie", response);
        this.setnamefreelancer(data.nom);
        resolve(1);
      },
      error: (err) => {console.error("Erreur login", err)
        reject(0);}
    })});
     }
}
