
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Client {

     nomclient:string="";

     constructor(private http:HttpClient){}

     creerclient(data:any):Promise<number>{
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return new Promise((resolve, reject) => {
       this.http.post('http://127.0.0.1:5000/signclient',data,{headers}).subscribe({
       next: (response) => {
        console.log("Compte cree avec succes", response);
        resolve(1);
      },
      error: (err) => {
        console.error("Erreur du creation", err);
        reject(0);
      }
    });
     });}
     setnameclient(nom:string){
           this.nomclient=nom;
     }
     loginclient(data:any):Promise<number>{
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
      return new Promise((resolve, reject) => {
    this.http.post('http://127.0.0.1:5000/loginclient', data, { headers }).subscribe({
      next: (response) => {
        console.log("Connexion réussie", response);
        this.setnameclient(data.nom);
        resolve(1);
      },
      error: (err) => {
        console.error("Erreur login", err);
        reject(0);
      }
    });
  });}
}
