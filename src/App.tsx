import React from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Home } from "./pages";
import { CONTENT_MAX_WIDTH, HEADER_HEIGHT } from "./styles";
import { Header, Footer } from "./views";
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from "./keys";
import "./App.css";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const Main = styled.main`
  min-height: ${100 - HEADER_HEIGHT}vh;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
