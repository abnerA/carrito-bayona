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


// addparticipation("Blanco", [""], "Agosto/")

// addparticipation("Raúl Ortega", ["", "", "", "", ""], "Agosto/")
// addparticipation("Débora Ortega", ["", "", "", "", ""], "Agosto/")
// addparticipation("Sairiel Mateo", ["", "", "", "", ""], "Agosto/")
// addparticipation("Janelys Mateo", ["", "", "", "", ""], "Agosto/")
// addparticipation("Arisleyda Bazán", ["", "", "", "", ""], "Agosto/")
// addparticipation("Miladys Gutiérrez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Julia De La Cruz", ["", "", "", "", ""], "Agosto/")
// addparticipation("Eunice Segura", ["", "", "", "", ""], "Agosto/")
// addparticipation("Bienvenida Peña", ["", "", "", "", ""], "Agosto/")
// addparticipation("Dilenia Bernabé", ["", "", "", "", ""], "Agosto/")
// addparticipation("Isabel García", ["", "", "", "", ""], "Agosto/")
// addparticipation("Yehonala Segura", ["", "", "", "", ""], "Agosto/")
// addparticipation("Diana Concepción", ["", "", "", "", ""], "Agosto/")
// addparticipation("Raysa Brito", ["", "", "", "", ""], "Agosto/")
// addparticipation("Leopoldina Archibald", ["", "", "", "", ""], "Agosto/")
// addparticipation("Elisabeth Corona", ["", "", "", "", ""], "Agosto/")
// addparticipation("José Luis Corona", ["", "", "", "", ""], "Agosto/")
// addparticipation("Joel Valdez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Rafaela Ramírez", ["", "", "", "", ""], "Agosto/")
// addparticipation("Eliana de los Santos", ["", "", "", "", ""], "Agosto/")
// addparticipation("Maricruz Batista", ["", "", "", "", ""], "Abril/")
// addparticipation("Emilia Seguil", ["", "", "", "", ""], "Abril/")
// addparticipation("Coral Duran", ["", "", "", "", ""], "Diciembre/") 



// export function addName(userId, name, month) {
//   const db = getDatabase();
//   const reference = ref(db, "Agosto/" + userId);

//   set(reference, {
//     name: name,
//   });
// }

// addName("day1", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day2", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day3", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day4", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day5", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day6", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day7", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day8", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day9", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day10", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day11", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day12", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day13", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day14", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day15", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day16", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day17", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day18", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day19", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day20", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day21", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day22", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day23", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day24", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day25", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day26", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day27", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day28", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day29", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day30", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);
// addName("day31", ["", "", "", "", "", "", "", "", "", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)", "rgb(35, 182, 35)"]);