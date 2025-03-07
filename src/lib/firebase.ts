// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuqWed3QBU2cewUVErlNn2Ok9RFE4JhzI",
    authDomain: "repo-mind-c0bce.firebaseapp.com",
    projectId: "repo-mind-c0bce",
    storageBucket: "repo-mind-c0bce.firebasestorage.app",
    messagingSenderId: "498638065283",
    appId: "1:498638065283:web:bd13feca94b928661755b6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file: File, setProgress?:(progress:number)=>void){
    return new Promise((resolve, reject)=>{
        try {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on('state_changed', (snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                if(setProgress){
                    setProgress(progress)
                }
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },error=>{
                reject(error)
            },()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl=>{
                    resolve(downloadUrl as string)
                })
            })
        } catch (error) {
            // console.log(error)
            reject(error)
        }
    })
} 