import "./Home.css";
import waves from "../../assets/waves.svg";

import {
  Box,
  Container,
  Img,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";

import { toTop } from "../../lib/toTop";
import { useState } from "react";

import { Project } from "./Project";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Main } from "./Main";
import { ScrollTop } from "../ScrollTop";

export const Home = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 576px)");
  const [isSmall] = useMediaQuery("(max-width: 432px)");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [fixHidden, setFixHidden] = useState(false);

  const movingY = () => {
    if (window.scrollY >= 269) setFixHidden(true);
    else setFixHidden(false);
  };
  window.addEventListener("scroll", movingY);

  function downloadCV() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      return toast({
        position: "top",
        duration: 1500,
        render: () => (
          <Box
            color="whitesmoke"
            p={3}
            bg="#865DFF"
            textAlign={"center"}
            borderRadius={"md"}
            w={"80%"}
            m={"auto"}
            mt={"4"}
          >
            Download Success
          </Box>
        ),
      });
    }, 2000);
  }

  return (
    <Box overflowX={"hidden"} as="main" position={"relative"}>
      <Box position={"absolute"} zIndex={"-99"} w={"100vw"} h={"100vh"}>
        <Img
          src={waves}
          width="100%"
          height={"100vh"}
          objectFit={"cover"}
          alt={"waves"}
        />
        <Img
          src={waves}
          width="100%"
          height={"100vh"}
          objectFit={"cover"}
          transform={"rotate(-180deg)"}
          alt={"waves"}
        />
      </Box>
      <Container maxW={"container.lg"} minH="79vh" mt={"111"} as={"section"}>
        <Main
          downloadCV={downloadCV}
          loading={loading}
          isTablet={isTablet}
          isMobile={isMobile}
        />
      </Container>
      <Container
        maxW={"container.lg"}
        minH="49vh"
        as={"section"}
        textAlign={isTablet ? "center" : ""}
        mb={"12"}
      >
        <Text fontSize={"1.8rem"} px={"2"}>
          Projects
        </Text>
        <Project isMobile={isMobile} isTablet={isTablet} isSmall={isSmall} />
      </Container>
      <Container
        maxW={"container.lg"}
        minH="49vh"
        as={"section"}
        textAlign={isTablet ? "center" : ""}
      >
        <Text px={"2"} fontSize={"1.8rem"} fontWeight={"semibold"}>
          My Expertise
        </Text>
        <Skills isMobile={isMobile} isTablet={isTablet} isSmall={isSmall} />
      </Container>
      <Container
        maxW={"container.lg"}
        minH="49vh"
        as={"section"}
        textAlign={isTablet ? "center" : ""}
        mb={"12"}
      >
        <Text fontSize={"1.8rem"} px={"2"}>
          Contact Me
        </Text>
        <Contact isMobile={isMobile} isTablet={isTablet} isSmall={isSmall} />
      </Container>
      <ScrollTop toTop={toTop} fixHidden={fixHidden} isTablet={isTablet} />
    </Box>
  );
};
