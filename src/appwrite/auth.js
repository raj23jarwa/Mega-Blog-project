import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";
export class AuthService {
    client =new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.account= new Account(this.client)
    }
    async createAccount({email,password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name);
           if (userAccount) {
            return userAccount
           } else {
            // call another method
            return this.login({email,password})
           }
        } catch (error) {
            throw error
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
            
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            
        } catch (error) {
            console.log("ppwrite service:: getCurrentUser :: error", error)
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
            
        }
    }
}

const authService =new AuthService
export default authService