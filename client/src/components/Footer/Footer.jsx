import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import { AiOutlineArrowUp, AiFillHeart } from "react-icons/ai";

import { toTop } from "../../lib/toTop";

export const Footer = () => {
  const [isTablet] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      py={"8"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"10"}
    >
      <Box hidden={isTablet ? true : false}>
        <Button
          bgColor={"#865DFF"}
          _hover={{ bgColor: "#6851D2" }}
          _active={{ bgColor: "rgba(104,81,210,.69)" }}
          gap={"2"}
          px={"6"}
          onClick={() => toTop()}
          fontWeight={"normal"}
        >
          To Top
          <>
            <AiOutlineArrowUp />
          </>
        </Button>
      </Box>
      <Box m={isTablet ? "auto" : ""} userSelect={"none"}>
        <Text
          color={"rgba(193,193,193,1)"}
          display={"flex"}
          alignItems={"center"}
          gap={"0.5"}
        >
          Coded with
          <Text color={"#865DFF"} as={"span"}>
            <AiFillHeart />
          </Text>
          <Text
            as={"span"}
            color={"#865DFF"}
            fontWeight={"semibold"}
            textDecoration={"underline"}
          >
            aese v0.1
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
