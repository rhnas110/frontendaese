import { Box, Button, Img, Text } from "@chakra-ui/react";
import abc from "../../assets/abc.png";
import scrollDown from "../../assets/scroll.png";
import myCV from "../../assets/cv/CV-17042023.pdf";

export const Main = ({ downloadCV, isTablet, isMobile, loading }) => {
  return (
    <Box pt={isTablet ? "0" : "20"} px={"2"}>
      <Box display={"flex"} flexDirection={isTablet ? "column" : "row"}>
        <Box
          w={isTablet ? "100%" : "50%"}
          pt={"10"}
          textAlign={isTablet ? "center" : ""}
        >
          <Text
            fontWeight={"semibold"}
            fontSize={"2.5rem"}
            className="animate fadeInUp animate_delay-1"
            as={"h1"}
          >
            Hi, I'm Han
          </Text>
          <Text
            fontSize={"1.5rem"}
            color={"rgba(193,193,193,1)"}
            mb={"1.5rem"}
            className="animate fadeInUp animate_delay-2"
            as={"h2"}
          >
            Full Stack Engineer
          </Text>
          <Text className="animate fadeInUp animate_delay-3">
            I started my journey as a web developer since graduating from High
            School when I was first fascinated by the world of web development
            and wanted to build amazing experiences for the web. Since then I've
            fallen in love with web development and spend most of my days taking
            my skills to the next level.
          </Text>
          <Button
            mt={"6"}
            isLoading={loading}
            onClick={() => downloadCV()}
            bgColor={"#865DFF"}
            _hover={{ bgColor: "#6851D2" }}
            _active={{ bgColor: "#865DFF" }}
            className="animate fadeInUp animate_delay-3"
            as={"a"}
            href={myCV}
            download
          >
            Download CV
          </Button>
        </Box>
        <Box
          w={isTablet ? "100%" : "50%"}
          h={"288px"}
          overflow={"hidden"}
          position={"relative"}
          display={"flex"}
          justifyContent={"end"}
          mt={isTablet ? "8" : ""}
          className="animate flipInX animate_delay-3"
        >
          <Img
            src={abc}
            w={"96%"}
            h={"444px"}
            objectFit={"cover"}
            position={"absolute"}
            top={!isTablet ? "-20" : isMobile ? "-16" : ""}
            alt={"abc"}
          />
        </Box>
      </Box>
      <Box
        mt={isTablet ? "10" : "14"}
        mb={"10"}
        display={"flex"}
        alignItems={"center"}
        userSelect={"none"}
        className="scroll-down"
        justifyContent={isTablet ? "center" : ""}
      >
        <Box h={"69px"}>
          <Img src={scrollDown} h={"69px"} w={"100%"} alt={"scrollDown"} />
        </Box>
        <Box fontSize={"1.2rem"}>
          <Text>Scroll down</Text>
        </Box>
      </Box>
    </Box>
  );
};
