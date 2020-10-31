import React from "react";
// import "component/FontAwesomeIcons";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1> Welcome To Proshop</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
