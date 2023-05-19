// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, addDoc, setDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYXXULtzeN3kMXwuuioHBKv_MJpR0dsbI",
  authDomain: "todo-list-f51f6.firebaseapp.com",
  projectId: "todo-list-f51f6",
  storageBucket: "todo-list-f51f6.appspot.com",
  messagingSenderId: "491319539301",
  appId: "1:491319539301:web:a730e57ba7de75d1eff88c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function getTasks(){
    const allTasks =[]
    const querySnapshot = await getDocs(collection(db,"tasks"));
    querySnapshot.forEach((doc)=>{
        allTasks.push({...doc.data(), id: doc.id})
    });

    return allTasks;
}

export async function addTask(taskTitle){
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
          title: taskTitle,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function editDocument(title,id){

await setDoc(doc(db, "tasks", id), {
  title: title,
  completed: true,
});

}