import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import Login from "../components/Authentication/Login";
  import Signup from "../components/Authentication/Signup";
  
  function Homepage() {
    const navigate = useNavigate();
  
    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("userInfo"));
  
    //   navigate("/chats");
    // }, []);
  
    return (
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="pink.400"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" textAlign="center" fontFamily="Work sans">
            CHAT APP
          </Text>
        </Box>
       <Box bg="pink.500" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant='unstyled' >
            <TabList mb="1em">
              <Tab _selected={{ color: 'black', bg: 'pink.100' }} >Login</Tab>
              <Tab _selected={{ color: 'black', bg: 'pink.100' }}>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel> 
                <Login /> 
               </TabPanel>
              <TabPanel> 
                <Signup /> 
               </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    )
  }
  
  export default Homepage;