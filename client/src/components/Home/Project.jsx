import { Box, Icon, Heading, Img, Text } from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import { FaFigma } from "react-icons/fa";

import { myProject } from "../../lib/project";

export const Project = ({ isMobile, isTablet, isSmall }) => {
  return (
    <Box
      px={"2"}
      mt={"10"}
      display={"grid"}
      gridTemplateColumns={
        !isTablet
          ? "repeat(3,1fr)"
          : !isMobile
          ? "repeat(2,1fr)"
          : !isSmall
          ? "repeat(1,.8fr)"
          : ""
      }
      alignItems={"center"}
      justifyContent={"center"}
      gap={"4"}
    >
      {myProject.map((item) => {
        return (
          <Box
            className="project-box"
            position={"relative"}
            borderRadius={"4"}
            overflow={"hidden"}
            display={"flex"}
            key={item.id}
          >
            <Img
              src={item.image}
              w={"100%"}
              h={"100%"}
              _hover={{ transform: "scale(1.123)" }}
              transition={"ease"}
              transitionDuration={".4s"}
              alt={item.title}
              objectFit={"cover"}
              objectPosition={"center"}
              loading="lazy"
            />
            <Box
              className="project-layer"
              position={"absolute"}
              bottom={"0"}
              left={"0"}
              w={"100%"}
              h={"100%"}
              bgGradient={"linear(to-b, rgba(0,0,0,.2), rgba(134,94,255,.789))"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              transform={"translateY(100%)"}
              transition={"ease"}
              transitionDuration={".5s"}
              transitionDelay={".3s"}
              textAlign={"center"}
            >
              <Heading size={item.title.length > 11 ? "md" : "lg"}>
                {item.title}
              </Heading>
              <Text
                h={item.desc.length > 33 ? "48px" : ""}
                mb={"2"}
                overflow={"hidden"}
              >
                {item.desc}
              </Text>
              <Box display={"flex"}>
                <Box hidden={item.github ? false : true}>
                  <Icon
                    boxSize={"12"}
                    _hover={{
                      color: "rgb(25, 24, 37)",
                      transform: "scale(1.123)",
                    }}
                    onClick={() => window.open(item.github, "_blank")}
                  >
                    <AiOutlineGithub />
                  </Icon>
                </Box>
                <Box hidden={item.demo ? false : true}>
                  <Icon
                    boxSize={"12"}
                    _hover={{
                      color: "rgb(25, 24, 37)",
                      transform: "scale(1.123)",
                    }}
                    onClick={() => window.open(item.demo, "_blank")}
                  >
                    <MdLiveTv />
                  </Icon>
                </Box>
                <Box hidden={item.link ? false : true}>
                  <Icon
                    boxSize={"12"}
                    _hover={{
                      color: "rgb(25, 24, 37)",
                      transform: "scale(1.123)",
                    }}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    <AiOutlineLink />
                  </Icon>
                </Box>
                <Box hidden={item.figma ? false : true}>
                  <Icon
                    boxSize={"12"}
                    _hover={{
                      color: "rgb(25, 24, 37)",
                      transform: "scale(1.123)",
                    }}
                    onClick={() => window.open(item.figma, "_blank")}
                  >
                    <FaFigma />
                  </Icon>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
