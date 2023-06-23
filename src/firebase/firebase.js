import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8NzLBe5N3vc_IjuixOV3Z14SFTZZl60Q",
  authDomain: "carrito-bayona-8cb7d.firebaseapp.com",
  databaseURL: "https://carrito-bayona-8cb7d-default-rtdb.firebaseio.com",
  projectId: "carrito-bayona-8cb7d",
  storageBucket: "carrito-bayona-8cb7d.appspot.com",
  messagingSenderId: "803079318460",
  appId: "1:803079318460:web:76372de2097ed635eed9b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Para acceder a la DB de Firestore Database
export const db = getFirestore(app);

// Para acceder a la DB de Realtime Database
export const dataB = getDatabase(app);

// Add Data the Realtime Database
// Con esta function puedo agregar datos a la DB Realtime
export function addName(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

// Con está function guardamos las fechas en que vamos a participar
export function addparticipation(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

