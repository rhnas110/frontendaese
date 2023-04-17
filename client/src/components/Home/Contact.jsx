import { useRef, useState } from "react";
import {
  Box,
  Text,
  Icon,
  Button,
  Input,
  FormControl,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { myContact } from "../../lib/contact";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export const Contact = ({ isMobile, isTablet, isSmall }) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const form = useRef();

  const SendValid = Yup.object().shape({
    name: Yup.string()
      .required("Name can't be empty")
      .min(4, "Name at least 4 characters"),
    email: Yup.string().email("Invalid email").required("Email can't be empty"),
    message: Yup.string()
      .required("Message can't be empty")
      .min(15, "Message at least 15 characters"),
  });

  const sendEmail = (values, action) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_gbz9jb7",
        "template_oj2unqt",
        form.current,
        "U6BzxcayeO78toaUe"
      )
      .then(
        (result) => {
          setLoading(false);
          toast({
            position: "top",
            duration: 1500,
            render: () => (
              <Box
                color="whitesmoke"
                p={3}
                bg="#865DFF"
                textAlign={"center"}
                borderRadius={"md"}
                w={"90%"}
                m={"auto"}
                mt={"4"}
              >
                Message Sent
              </Box>
            ),
          });
          action.resetForm();
          // console.log(result.text);
        },
        (error) => {
          setLoading(false);
          return toast({
            position: "top",
            duration: 2000,
            title: "Fail Send",
            status: "error",
            isClosable: true,
          });
          // console.log(error.text);
        }
      );
  };

  return (
    <Box
      px={"2"}
      mt={"8"}
      display={"grid"}
      gridTemplateColumns={
        !isTablet
          ? ".69fr 1fr"
          : !isMobile
          ? "repeat(1,.79fr)"
          : !isSmall
          ? "repeat(1,.88fr)"
          : "repeat(1,1fr)"
      }
      justifyContent={"center"}
      gap={"4"}
    >
      <Box>
        {myContact.map((item, index) => {
          return (
            <Box key={index} px={"8"} py={"4"} mb={"2"}>
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems="center"
                justifyContent="center"
                gap={"2"}
                textAlign={"center"}
                borderRadius={"lg"}
                bgColor={"rgba(134,93,255,.345)"}
                p={"4"}
              >
                <Icon fontSize={"2xl"}>{item.icon}</Icon>
                <Text color={"rgba(193,193,193,1)"}>{item.title}</Text>
                <Box color="rgba(134,93,255,1)">
                  <a
                    href={item.link}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Send a message
                  </a>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box>
        <Box px={"8"} py={"4"}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={SendValid}
            onSubmit={(values, action) => {
              sendEmail(values, action);
            }}
          >
            {() => {
              return (
                <Form ref={form}>
                  <FormControl>
                    <Input
                      border={"2px"}
                      borderColor={"rgba(134,93,255,.77)"}
                      _hover={{ borderColor: "none" }}
                      as={Field}
                      name="name"
                      type="text"
                      placeholder="Name"
                      autoComplete="off"
                      _placeholder={{
                        opacity: 1,
                        color: "rgba(193,193,193,1)",
                      }}
                      size="lg"
                    />
                    <ErrorMessage
                      style={{ color: "rgba(134,93,255,1)" }}
                      component="div"
                      name="name"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      mt="20px"
                      border={"2px"}
                      borderColor={"rgba(134,93,255,.77)"}
                      _hover={{ borderColor: "none" }}
                      as={Field}
                      name="email"
                      type="text"
                      autoComplete="off"
                      placeholder="Email"
                      _placeholder={{
                        opacity: 1,
                        color: "rgba(193,193,193,1)",
                      }}
                      size="lg"
                    />
                    <ErrorMessage
                      style={{ color: "rgba(134,93,255,1)" }}
                      component="div"
                      name="email"
                    />
                  </FormControl>
                  <FormControl>
                    <Field
                      mt="20px"
                      border={"2px"}
                      borderColor={"rgba(134,93,255,.77)"}
                      _hover={{ borderColor: "none" }}
                      as={Textarea}
                      name="message"
                      type="text"
                      autoComplete="off"
                      placeholder="Message"
                      _placeholder={{
                        opacity: 1,
                        color: "rgba(193,193,193,1)",
                      }}
                      size="lg"
                      resize="none"
                      h="32"
                    />
                    <ErrorMessage
                      style={{ color: "rgba(134,93,255,1)" }}
                      component="div"
                      name="message"
                    />
                  </FormControl>
                  <Box textAlign={"right"}>
                    <Button
                      mt="8"
                      size="lg"
                      type="submit"
                      bgColor={"#865DFF"}
                      _hover={{ bgColor: "#6851D2" }}
                      _active={{ bgColor: "#865DFF" }}
                      isLoading={loading}
                    >
                      Send
                    </Button>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};
