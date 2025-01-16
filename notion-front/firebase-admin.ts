import { initializeApp, getApps, App, getApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let app: App;


const serviceKey:ServiceAccount = {
  projectId: "notion-clone-87a7a",
  clientEmail: "firebase-adminsdk-1h5yv@notion-clone-87a7a.iam.gserviceaccount.com",
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\n/g, '\n')!,
};

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };