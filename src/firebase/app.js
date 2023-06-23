import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from './firebase';

// Agregar docs
export const savedPersonName = (name) => {
    addDoc(collection(db, 'persons'), {name});
}

// Leer docs
export const getPersons = async ()  => {
    const result = await getDocs(query(collection(db, 'persons')));
    return result;
};

// DELETE
export const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'persons', id));
};

// UPDATE
export const updateItem = async (id, name) => {
    await updateDoc(doc(db, 'persons', id), {name});
};