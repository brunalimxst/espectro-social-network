export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'; // eslint-disable-line import/no-unresolved
export {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'; // eslint-disable-line import/no-unresolved

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'; // eslint-disable-line import/no-unresolved
