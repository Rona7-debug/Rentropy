import { db } from "./firebase"
import { collection, addDoc, getDoc, doc, updateDoc, query, where, getDocs } from "firebase/firestore"
import { updateItemAvailability } from "./itemsFunctions"
import { addRentalToBuyer } from "./buyersFunctions"

// CREATE rental
export const createRental = async (rentalData) => {
  const docRef = await addDoc(collection(db, "rentals"), {
    ...rentalData,
    rentalStatus: "active",
    paymentStatus: "paid",
  })

  // update item to rented
  await updateItemAvailability(rentalData.itemId, "rented")

  // add to buyer's activeRentals
  await addRentalToBuyer(rentalData.buyerId, docRef.id)

  return docRef.id
}

// GET rental
export const getRental = async (rentalId) => {
  const snapshot = await getDoc(doc(db, "rentals", rentalId))
  return { rentalId: snapshot.id, ...snapshot.data() }
}

// GET all rentals by buyer
export const getRentalsByBuyer = async (buyerId) => {
  const q = query(collection(db, "rentals"), where("buyerId", "==", buyerId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ rentalId: doc.id, ...doc.data() }))
}

// RETURN item
export const returnItem = async (rentalId, itemId) => {
  await updateDoc(doc(db, "rentals", rentalId), { rentalStatus: "returned" })
  await updateItemAvailability(itemId, "available")
}