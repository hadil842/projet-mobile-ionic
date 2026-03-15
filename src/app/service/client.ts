
import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Client {

     nomclient:string="";

     constructor(){}

     async creerclient(data:any):Promise<any>{
         try{
              let response=await fetch('http://127.0.0.1:5000/signin/signclient',{method:'POST',
            headers:{'Content-Type':'application/json'},
            body:data
            });
            console.log(response.status);
           return response.status;}
        catch(error){
              console.log("login failed");
            return 500;
        }}
     setnameclient(nom:string){
           this.nomclient=nom;
     }
     async loginclient(data:any):Promise<any>{
      try{
       let reponse =await fetch('http://127.0.0.1:5000/login/loginclient/',{
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
