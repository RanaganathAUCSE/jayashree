/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Google Drive Logistics Research Sync Service
 * Connects to Google Drive using client-side Firebase Auth + Google OAuth token.
 * Searches and indexes research files from user's Drive.
 */

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { addDriveLocations } from "./locationData.js";

const firebaseConfig = {
  projectId: "gen-lang-client-0448730378",
  appId: "1:488496667371:web:65933edf76ce5a0cbffcae",
  apiKey: "AIzaSyAuOuhI42sffkUhVD8cc4q-2_FbWzUJDhc",
  authDomain: "gen-lang-client-0448730378.firebaseapp.com",
  storageBucket: "gen-lang-client-0448730378.firebasestorage.app",
  messagingSenderId: "488496667371",
  oAuthClientId: "488496667371-hlsmvj3a6sliac0s7tig0gubdbtdv7kd.apps.googleusercontent.com"
};

const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/drive.readonly');
provider.setCustomParameters({
  prompt: 'select_account'
});

let cachedAccessToken = null;
let currentUser = null;

// Auth State Listener
export function initDriveAuth(onSuccess, onSignedOut) {
  return onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    if (user && cachedAccessToken) {
      if (onSuccess) onSuccess(user, cachedAccessToken);
    } else {
      if (!user) cachedAccessToken = null;
      if (onSignedOut) onSignedOut();
    }
  });
}

export async function signInWithGoogleDrive() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential || !credential.accessToken) {
      throw new Error('Failed to obtain Google Drive OAuth access token.');
    }
    cachedAccessToken = credential.accessToken;
    currentUser = result.user;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error) {
    console.error('Google Drive sign-in error:', error);
    throw error;
  }
}

export function getCachedToken() {
  return cachedAccessToken;
}

export function getCurrentUser() {
  return currentUser;
}

export async function signOutDrive() {
  await signOut(auth);
  cachedAccessToken = null;
  currentUser = null;
}

/**
 * Searches Google Drive for user's researched logistics folders and files
 */
export async function searchDriveResearchFiles(token) {
  const activeToken = token || cachedAccessToken;
  if (!activeToken) {
    throw new Error('Please connect your Google Drive account first.');
  }

  // Search query targeting user's specific folders & research docs
  const query = "trashed = false and (name contains 'Research' or name contains 'State' or name contains 'Hyderabad' or name contains 'Delivery' or name contains 'Docs' or mimeType = 'application/vnd.google-apps.folder')";
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name,mimeType,modifiedTime,size)&pageSize=50&orderBy=modifiedTime desc`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${activeToken}`,
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Drive API error (${response.status})`);
  }

  const data = await response.json();
  return data.files || [];
}

/**
 * Reads content of a specific Drive file and parses any location records
 */
export async function syncLocationFileFromDrive(fileId, fileName, token) {
  const activeToken = token || cachedAccessToken;
  if (!activeToken) return 0;

  try {
    const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
      headers: { Authorization: `Bearer ${activeToken}` }
    });

    if (!res.ok) return 0;

    const text = await res.text();
    let parsedCount = 0;
    try {
      const parsed = JSON.parse(text);
      const items = Array.isArray(parsed) ? parsed : (parsed.locations || []);
      if (items.length > 0) {
        addDriveLocations(items, {
          id: fileId,
          name: fileName,
          mimeType: 'application/json',
          recordsCount: items.length
        });
        parsedCount = items.length;
      }
    } catch {
      addDriveLocations([], {
        id: fileId,
        name: fileName,
        mimeType: 'text/plain',
        recordsCount: 0
      });
    }

    return parsedCount;
  } catch (err) {
    console.warn(`Could not parse Drive file ${fileName}:`, err);
    return 0;
  }
}
