import "./NotFound.css";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      maxW={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
      flexDirection={"column"}
      userSelect={"none"}
    >
      <Box title="404" className="not-found">
        404
      </Box>
      <Box
        cursor={"pointer"}
        onClick={() => navigate("/")}
        className="back fadeInUp animate animate_delay-nf"
      >
        Back
      </Box>
    </Box>
  );
};
