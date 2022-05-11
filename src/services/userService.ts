import type Iuser from "@/interfaces/user";
import user from "@/models/user";


export default class userService {

    private static usersKey:string = 'users';
    private static authUser:string = 'auth-user';

    public static auth(): user|null{
        let userObj:Iuser|null = this.readLocalStroage(this.authUser);
        return userObj ? user.cast(userObj) : null;
    }

    public static register(email:string, fullName:string, password: string): user|false{

        let users: user[]|null = this.readLocalStroage(this.usersKey);
        if(users!=null && users.length){
           let exists:user|undefined = users.find((userObj:user) => userObj.email == email);
           if(exists){
               return false;
           }
        }else{
            users = [];
        }

        let registerdUser: user = new user(email, fullName, password);
        users.push(registerdUser);
        this.writeLocalStorage(this.usersKey, users);
        this.writeLocalStorage(this.authUser, registerdUser);

        return registerdUser;
    }

    public static login(email:string, password:string): user|false{

        if(this.readLocalStroage(this.authUser)){
            throw new Error("Already logged in");
        }

        let users: Iuser[]|null = this.readLocalStroage(this.usersKey);

        if(users!=null && users.length){
            let exists:Iuser|undefined = users.find((userObj:Iuser) => userObj.email == email && userObj.password == password);
            if(!exists){
                return false;
            }
            let auth:user = user.cast({...exists});
            this.writeLocalStorage(this.authUser, auth);
            return auth;
        }else{
            return false
        }
        
    }

    public static logout():boolean {

        if(!this.readLocalStroage(this.authUser)){
            return false;
        }

        localStorage.removeItem(this.authUser);
        return true;
    }

    public static updateAuth(user:user):void{
        this.writeLocalStorage(this.authUser, user);
    }

    protected static readLocalStroage(key:string): any{

        let localString:string|null = localStorage.getItem(key);
        let data: any = localString != null ? JSON.parse(localString) : null;
        return data;
    }

    protected static writeLocalStorage(key:string, value:any):void{
        localStorage.removeItem(key);
        console.log(JSON.stringify(value));

        let decodedValue:string = JSON.stringify(value);
        localStorage.setItem(key, decodedValue);
    }
    
}