// Completează cu datele din Firebase Console → Project Settings → Your apps
const firebaseConfig = {
  apiKey:            "INLOCUIESTE_CU_API_KEY",
  authDomain:        "INLOCUIESTE_CU_AUTH_DOMAIN",
  projectId:         "INLOCUIESTE_CU_PROJECT_ID",
  storageBucket:     "INLOCUIESTE_CU_STORAGE_BUCKET",
  messagingSenderId: "INLOCUIESTE_CU_MESSAGING_SENDER_ID",
  appId:             "INLOCUIESTE_CU_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
