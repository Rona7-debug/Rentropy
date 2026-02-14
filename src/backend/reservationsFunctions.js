import { db } from "./firebase"
import { collection, addDoc, getDoc, doc, updateDoc, query, where, getDocs } from "firebase/firestore"
import { updateItemAvailability } from "./itemsFunctions"
import { addReservationToBuyer } from "./buyersFunctions"

// CREATE reservation
export const createReservation = async (reservationData) => {
  const docRef = await addDoc(collection(db, "reservations"), {
    ...reservationData,
    reservationStatus: "pending",
  })

  // update item to reserved
  await updateItemAvailability(reservationData.itemId, "reserved")

  // add to buyer's reservations
  await addReservationToBuyer(reservationData.buyerId, docRef.id)

  return docRef.id
}

// GET reservations by buyer
export const getReservationsByBuyer = async (buyerId) => {
  const q = query(collection(db, "reservations"), where("buyerId", "==", buyerId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ reservationId: doc.id, ...doc.data() }))
}

// CONFIRM reservation
export const confirmReservation = async (reservationId) => {
  await updateDoc(doc(db, "reservations", reservationId), {
    reservationStatus: "confirmed"
  })
}

// CANCEL reservation
export const cancelReservation = async (reservationId, itemId) => {
  await updateDoc(doc(db, "reservations", reservationId), {
    reservationStatus: "cancelled"
  })
  await updateItemAvailability(itemId, "available")
}