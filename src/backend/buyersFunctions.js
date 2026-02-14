import { db, storage } from "./firebase"
import { collection, addDoc, getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

// REGISTER buyer
export const registerBuyer = async (buyerData) => {
  const docRef = await addDoc(collection(db, "buyers"), {
    ...buyerData,
    rentalHistory: [],
    activeRentals: [],
    reservations: [],
    createdAt: new Date()
  })
  return docRef.id
}

// GET buyer
export const getBuyer = async (buyerId) => {
  const snapshot = await getDoc(doc(db, "buyers", buyerId))
  return { buyerId: snapshot.id, ...snapshot.data() }
}

// UPLOAD valid ID image
export const uploadId = async (buyerId, file, side) => {
  // side = "Front" or "Back"
  const storageRef = ref(storage, `buyers/${buyerId}/validId${side}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  await updateDoc(doc(db, "buyers", buyerId), { [`validId${side}`]: url })
  return url
}

// ADD rental to buyer history
export const addRentalToBuyer = async (buyerId, rentalId) => {
  await updateDoc(doc(db, "buyers", buyerId), {
    activeRentals: arrayUnion(rentalId)
  })
}

// ADD reservation to buyer
export const addReservationToBuyer = async (buyerId, reservationId) => {
  await updateDoc(doc(db, "buyers", buyerId), {
    reservations: arrayUnion(reservationId)
  })
}