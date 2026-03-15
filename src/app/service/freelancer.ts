import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Freelancer {
   nomfreel:string="";

     constructor(){}

    async creerfreelancer(data:any):Promise<any>{
         try{
              let response=await fetch('http://127.0.0.1:5000/signin/signfreelancer',{method:'POST',
            headers:{'Content-Type':'application/json'},
            body:data
            });
            console.log(response.status);
           return response.status;}
        catch(error){
              console.log("login failed");
            return 500;
        }}
     setnamefreelancer(nom:string){
           this.nomfreel=nom;
     }
     async loginfreelancer(data:any):Promise<any>{
      try{
       let reponse =await fetch('http://127.0.0.1:5000/login/loginfreel',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:data
            });
            console.log(reponse.status);
        return reponse.status;}
        catch(error){
            console.log("login failed");
            return 500;
        }
     }
}
