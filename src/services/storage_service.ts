import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";


@Injectable()
export class StorageService {

    getLocalUser() : LocalUser {
        let usr = localStorage.getItem("localUser");
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj : LocalUser) {
        if (obj == null) {
            localStorage.removeItem("localUser");
        }
        else {
            localStorage.setItem("localUser", JSON.stringify(obj));
        }
    }
}