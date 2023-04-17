import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { Container } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Container maxW={"container.lg"} minH="20vh" as={"footer"}>
        <Footer />
      </Container>
    </>
  );
};
