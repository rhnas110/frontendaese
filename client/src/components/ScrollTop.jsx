import { Box, Button } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ScrollTop = ({ isTablet, fixHidden, toTop }) => {
  return (
    <Box
      position={"fixed"}
      bottom={"4"}
      right={"4"}
      zIndex={"99"}
      hidden={isTablet && fixHidden ? false : true}
      transitionDuration={"1s"}
    >
      <Button
        bgColor={"#865DFF"}
        _hover={{ bgColor: "#6851D2" }}
        _active={{ bgColor: "rgba(104,81,210,.69)" }}
        px={"6"}
        onClick={() => toTop()}
        fontWeight={"normal"}
      >
        <AiOutlineArrowUp />
      </Button>
    </Box>
  );
};
