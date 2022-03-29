import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CredentialsDto } from "../models/credentials_dto";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class LoginService{

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    authenticate(creds: CredentialsDto): Observable<any>{
        
    }
}