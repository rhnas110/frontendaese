import { Box, Text } from "@chakra-ui/react";
import { feSkills, beSkills } from "../../lib/skill";

export const Skills = ({ isMobile, isTablet, isSmall }) => {
  return (
    <Box
      px={"2"}
      mt={"8"}
      display={"grid"}
      gridTemplateColumns={
        !isTablet
          ? "repeat(2,1fr)"
          : !isMobile
          ? "repeat(1,.79fr)"
          : !isSmall
          ? "repeat(1,.79fr)"
          : "repeat(1,1fr)"
      }
      justifyContent={"center"}
      gap={"4"}
    >
      <Box
        borderRadius={"lg"}
        bgColor={"rgba(47,46,51,.69)"}
        px={"8"}
        py={"4"}
        transition={".23s"}
        transitionTimingFunction={"linear"}
        _hover={{
          bgColor: "transparent",
          border: "2px",
          borderColor: "#6D67E4",
        }}
      >
        <Text color={"#6D67E4"} fontWeight={"semibold"} fontSize={"1.2rem"}>
          Frontend Development
        </Text>
        <Box
          mt={"4"}
          display={"grid"}
          gridTemplateColumns={"repeat(2,1fr)"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"4"}
        >
          {feSkills.map((item, index) => {
            return (
              <Box key={index} display={"flex"} gap={"2"}>
                <Box mt={"1"} color={"#6D67E4"}>
                  {item.icon}
                </Box>
                <Box textAlign={"left"}>
                  <Text>{item.skill}</Text>
                  <Text as={"small"} color={"rgba(245,245,245,.678)"}>
                    {item.level}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        borderRadius={"lg"}
        bgColor={"rgba(47,46,51,.69)"}
        px={"8"}
        py={"4"}
        transition={".23s"}
        transitionTimingFunction={"linear"}
        _hover={{
          bgColor: "transparent",
          border: "2px",
          borderColor: "#6D67E4",
        }}
      >
        <Text color={"#6D67E4"} fontWeight={"semibold"} fontSize={"1.2rem"}>
          Backend Development
        </Text>
        <Box
          mt={"4"}
          display={"grid"}
          gridTemplateColumns={"repeat(2,1fr)"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"4"}
        >
          {beSkills.map((item, index) => {
            return (
              <Box key={index} display={"flex"} gap={"2"}>
                <Box mt={"1"} color={"#6D67E4"}>
                  {item.icon}
                </Box>
                <Box textAlign={"left"}>
                  <Text>{item.skill}</Text>
                  <Text as={"small"} color={"rgba(245,245,245,.678)"}>
                    {item.level}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
