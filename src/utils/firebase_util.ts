import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
/*
const firebaseConfig = {
    apiKey: "AIzaSyDCbxvztZKuY7jT2-QrjYYja4Pis_nvjgw",
    authDomain: "websitetrial-751df.firebaseapp.com",
    databaseURL: "https://websitetrial-751df.firebaseio.com",
    projectId: "websitetrial-751df",
    storageBucket: "websitetrial-751df.appspot.com",
    messagingSenderId: "753007707796",
    appId: "1:753007707796:web:c47ac33bf9e0e0a34dd681"

}
*/
const firebaseConfig = {
    apiKey: "AIzaSyBhvmEOjB7-x5-8dxqc_Hgsr0UbfvpeA_c",
    authDomain: "dmaths-website.firebaseapp.com",
    databaseURL: "https://dmaths-website.firebaseio.com",
    projectId: "dmaths-website",
    storageBucket: "dmaths-website.appspot.com",
    messagingSenderId: "149499051594",
    appId: "1:149499051594:web:9633281006e4558cbcf0b3"
}

export class FirebaseUtils {

    private static getFirebaseApp = () => {
        if(typeof window !== 'undefined'){
            return firebase.apps.length ? firebase.apps[0] : firebase.initializeApp(firebaseConfig) 
        }
        return null;
    }

    public static getUser = () => {
        const app = FirebaseUtils.getFirebaseApp()
        return {"name": app?.auth().currentUser?.displayName, "email": app?.auth().currentUser?.email}
    } 

    public static getPageData = async (page: string):Promise<any> => {
        let output: any = {}
        const app = FirebaseUtils.getFirebaseApp()
        const db = app?.firestore().collection("data")
        const data = await db?.doc(page).get()
        output = (data) ? data.data() : {}
        return output
    }

    public static login = (callback:()=>void) => {
        const app = FirebaseUtils.getFirebaseApp()
        let provider = new firebase.auth.GoogleAuthProvider();
        app?.auth().signInWithPopup(provider).then(function(result) {
            callback();
            alert("Welcome, " + result.user?.displayName)
        }).catch(function(error) {
            alert("Oops... login failed. Please try again")
        });
    }

    public static logout = (callback:()=>void) => {
        const app = FirebaseUtils.getFirebaseApp()
        app?.auth().signOut().then(function(result){
            callback();
            alert("Sucessfully logged out")
        }).catch(function(error){alert("Oops... failed to logout")})
    }

    public static saveChanges = (currentPage:string, page_data:Object) => {
        const app = FirebaseUtils.getFirebaseApp()
        app?.firestore().collection('data').doc(currentPage).set(page_data).then(function(result){
            alert("Sucessfully saved changes. \nPlease make an entry of this change in the Change log sheet shared with you. \nThank you!")
        }).catch(function(error){
            alert("Oops... Sorry, unable to save changes. This might have happened because, \n i) You may not have the edit access to the data \n ii) You may not have a stable network")
        })
    }
}


