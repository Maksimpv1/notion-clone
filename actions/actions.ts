'use server'

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server"

export async function createNewDocument() {
    auth.protect()
    const { sessionClaims } = await auth();

    const docColectionRef = adminDb.collection("documents")
    const docRef = await docColectionRef.add({
        title:"New Doc"
    })

    if (!sessionClaims || !sessionClaims.email) {
        throw new Error("Email is missing in sessionClaims");
    }

    // Обновите пользователя в Firestore
    await adminDb.collection('users').doc(sessionClaims.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
    });

    return { docId: docRef.id };
}


