import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyDo8VtHsgFK8_p2hoDspFWTNXpAvBAoZ8Q",
 authDomain: "expense-tracker.firebaseapp.com",
 projectId: "expense-tracker",
 storageBucket:  "expense-tracker-fabea.firebasestorage.app",
 messagingSenderId: "165540737596",
 appId: "1:165540737596:web:3d7b8774245c87dc62c939",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };