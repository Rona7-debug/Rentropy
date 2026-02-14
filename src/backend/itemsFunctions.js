import { db } from "./firebase"
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, query, where } from "firebase/firestore"

// GET all available items
export const getAvailableItems = async () => {
  const q = query(collection(db, "items"), where("availability", "==", "available"))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ itemId: doc.id, ...doc.data() }))
}

// GET single item
export const getItemById = async (itemId) => {
  const docRef = doc(db, "items", itemId)
  const snapshot = await getDoc(docRef)
  return { itemId: snapshot.id, ...snapshot.data() }
}

// UPDATE item availability
export const updateItemAvailability = async (itemId, status) => {
  await updateDoc(doc(db, "items", itemId), { availability: status })
}