# Next.js & Expo WebView Authentication with FCM

## Overview

This project demonstrates a full-stack authentication solution involving a Next.js web application with Google Sign-Up, integrated into an Expo Android application via WebView. It also features Firebase Cloud Messaging (FCM) for push notifications, implemented using native FCM integration rather than Expo's direct notification service.

The Next.js frontend is built with Material-UI (MUI) for styling and Firebase for Google authentication.

## Features

*   **Next.js Web Application:**
    *   Built with Next.js 15.
    *   Styled using Material-UI (MUI).
    *   Google Sign-Up/Sign-In functionality using Firebase Authentication.
*   **Expo Android App:**
    *   Integrates the Next.js web application using a WebView component.
    *   Receives user authentication status and data from the WebView.
*   **Push Notifications:**
    *   Firebase Cloud Messaging (FCM) for push notifications.
    *   Native FCM integration (not using Expo's direct notification service).
    *   Upon successful login in the WebView, user details (UID) are sent to the React Native (Expo) app, which can then be used for registering for FCM or other native functionalities.

## Project Links

*   **GitHub Repository:** [https://github.com/kichu12348/nextauthassesment](https://github.com/kichu12348/nextauthassesment)
*   **Deployed Next.js App:** [https://nextauthassesment.vercel.app](https://nextauthassesment.vercel.app)

## Tech Stack

*   **Frontend (Web):** Next.js, React, Material-UI (MUI)
*   **Authentication:** Firebase Authentication (Google Sign-In)
*   **Mobile App:** Expo (React Native)
*   **Push Notifications:** Firebase Cloud Messaging (FCM)

## Getting Started (Next.js Web App)

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Setup Firebase

1.  Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
2.  Enable Google Sign-In in the Authentication section.
3.  Obtain your Firebase project configuration (apiKey, authDomain, etc.).
4.  Create a `.env.local` file in the root of the Next.js project (`c:\Users\kichu\Desktop\Internship\nextauth`) and add your Firebase credentials:

    ```env
    NEXT_PUBLIC_apiKey="YOUR_API_KEY"
    NEXT_PUBLIC_authDomain="YOUR_AUTH_DOMAIN"
    NEXT_PUBLIC_projectId="YOUR_PROJECT_ID"
    NEXT_PUBLIC_storageBucket="YOUR_STORAGE_BUCKET"
    NEXT_PUBLIC_messagingSenderId="YOUR_MESSAGING_SENDER_ID"
    NEXT_PUBLIC_appId="YOUR_APP_ID"
    NEXT_PUBLIC_measurementId="YOUR_MEASUREMENT_ID"
    ```

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/kichu12348/nextauthassesment.git
    cd nextauthassesment
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Expo App Integration

The Next.js application is designed to be embedded within an Expo application using a WebView.
When a user successfully authenticates via Google Sign-In within the WebView, the following message is posted to the React Native WebView component:

```javascript
window.ReactNativeWebView?.postMessage(
  JSON.stringify({ uid: userData?.uid, data: userData, type: "notification" })
);
```

The Expo app should listen for this message to handle the authenticated user's data (e.g., UID for FCM registration).

## FCM Native Integration

The assignment requires native FCM integration for push notifications in the Expo app, avoiding Expo's direct notification service. This typically involves:
1.  Setting up FCM in the Firebase project for the Android app.
2.  Configuring the Android part of the Expo project to use the `google-services.json` file.
3.  Using a library like `@react-native-firebase/messaging` (requires ejecting from Expo Go or using a custom development build) or handling native modules directly to register for and receive FCM messages.
4.  The UID obtained from the WebView after login can be used to associate the FCM token with the specific user on your backend.

*(Further details on the Expo app's FCM setup would typically reside in the Expo app's own README.)*
