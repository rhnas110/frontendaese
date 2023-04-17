import "./Navbar.css";
import {
  Box,
  Text,
  Container,
  Icon,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  useToast,
} from "@chakra-ui/react";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

import { useState } from "react";

const iconNavbar = [
  {
    icon: <AiOutlineLinkedin />,
    link: "https://www.linkedin.com/in/raihanas/",
  },
  { icon: <FiGithub />, link: "https://github.com/rhnas110" },
  { icon: <AiOutlineInstagram />, link: "https://www.instagram.com/hanb.as/" },
];

export const Navbar = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bgNavbar, setBgNavbar] = useState(false);
  const toast = useToast();

  const changeBackground = () => {
    if (window.scrollY >= 123) setBgNavbar(true);
    else setBgNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Box
      bgColor={bgNavbar ? "rgba(0,0,0,.345)" : "transparent"}
      transitionDuration={".5s"}
      backdropFilter={bgNavbar ? "blur(3px)" : "none"}
      w={"100vw"}
      position="fixed"
      fontSize={"20px"}
      zIndex={"99"}
      as="nav"
    >
      <Container
        py={"6"}
        display={"flex"}
        maxW={"container.lg"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box
          onClick={() => window.location.reload()}
          cursor={"pointer"}
          fontWeight={"semibold"}
          className={isTablet ? "" : "aese"}
        >
          <Text as={"span"} hidden={isTablet ? true : false} className="fe">
            frontend
          </Text>
          <Text as={"span"} position={"relative"}>
            aese
            <span className="point"></span>
          </Text>
        </Box>
        <Box
          pt={"2"}
          display={"flex"}
          justifyContent={"space-between"}
          cursor={"pointer"}
          w={isTablet ? "" : "56%"}
          gap={"1.5"}
        >
          <Box display={"flex"} gap={"1.5"}>
            {iconNavbar.map((item, index) => {
              return (
                <Icon
                  boxSize={"10"}
                  _hover={{ color: "#865DFF", transform: "scale(1.123)" }}
                  onClick={() => window.open(item.link, "_blank")}
                  key={index}
                >
                  {item.icon}
                </Icon>
              );
            })}
          </Box>
          <Box>
            <Icon
              boxSize={"10"}
              _hover={{ color: "#865DFF", transform: "scale(1.123)" }}
              onClick={() => onOpen()}
            >
              <AiOutlineSetting></AiOutlineSetting>
            </Icon>
            <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent bgColor={"rgba(25, 24, 37,1)"}>
                <DrawerCloseButton />
                <DrawerHeader>Settings</DrawerHeader>
                <DrawerBody color={"rgba(193,193,193,1)"}>
                  <Box>
                    <Text mb={"3"}>Dark Mode</Text>
                    <Box width={"100%"} h={"50px"} display={"flex"}>
                      <input
                        type="checkbox"
                        id="check"
                        className="check"
                        defaultChecked
                        onClick={() => {
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
                              >
                                Coming Soon...
                              </Box>
                            ),
                          });
                        }}
                      />
                      <label htmlFor="check" className="button-dark"></label>
                    </Box>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
