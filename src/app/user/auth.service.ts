import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser;
    
    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            username: username
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}