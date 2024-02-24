import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

const PopUp = () => {
  return (
    <>
      
        <Flex
          justify="start"
          alignItems="start"
          w="50%"
          m='auto'
          h="auto"
          bg="lightgray"
          direction="column"
          p='1rem'
          fontWeight='600'
        >
          <Heading>Teenpatti</Heading>
          <Text> <b>Rules and Regulations </b></Text>
          <Box bg="lightsalmon" w="30%" p='0.5rem'>
            <b>GAME OBJECTIVES :-</b>
          </Box>
          <Text>
            To guess whether the Player A or Player B will get a better hand.
          </Text>
          <Box bg="lightsalmon" w="30%" p='0.5rem'>
            <b>GAME RULES :-</b>
          </Box>
          <Text>
            <b>Hands dealt :- </b> 2 (3 cards for Player A, 3 cards for Player B)
          </Text>
          <Text fontWeight='600'> <b>Bets :- </b>Highest hand wins.</Text>

          <Image
            h="300px"
            src="https://rg-assests.royalgaming.online/common/teenpatti-rules.jpg"
            alt="Dan Abramov"
          />

          <Heading size="sm">Side Bets:</Heading>
          <ul>
            <li>
              Pair Plus: When the user bets on Pair Plus markets, Payouts are
              defined as below for the runner the bets are placed.
            </li>
          </ul>
          <Table variant="simple" w="30%">
            <Thead>
              <Tr>
                <Th>Hands</Th>
                <Th>Payout</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Pair</Td>
                <Td>1 to 1</Td>
              </Tr>
              <Tr>
                <Td>Flush</Td>
                <Td>1 to 4</Td>
              </Tr>
              <Tr>
                <Td>Straight</Td>
                <Td>1 to 6</Td>
              </Tr>
              <Tr>
                <Td>Straight flush</Td>
                <Td>1 to 35</Td>
              </Tr>
              <Tr>
                <Td>Trio</Td>
                <Td>1 to 45</Td>
              </Tr>
            </Tbody>
          </Table>
          <Text>
            Number Ranking: Lowest to highest: 2, 3, 4, 5, 6, 7,8, 9, 10, Jack,
            Queen, and King (Ace can be "1" or "14").
          </Text>
          <Text>
            Suit Ranking (Highest to Lowest): Spades, Hearts, Clubs, Diamonds
          </Text>
          <Box bg="lightsalmon" w="30%" p='0.5rem'>
           <b> PAYOUT</b>
          </Box>
          <Text>Payout as per the bet placed</Text>
          <Table variant="simple" w="30%">
            <Tbody>
              <Tr>
                <Td>Player A</Td>
                <Td>1 to 0.98</Td>
              </Tr>
              <Tr>
                <Td>Player B</Td>
                <Td>1 to 0.98</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
     
    </>
  );
};

export default PopUp;


// import {
//     Flex,
//     Box,
//     Heading,
//     Text,
//     Image,
//     Table,
//     Thead,
//     Tr,
//     Th,
//     Tbody,
//     Td,
//   } from "@chakra-ui/react";
  
//   const PopUp = () => {
//     return (
//       <Flex justify="center" align="center" w="100%" h="100vh">
//         <Flex
//           direction="column"
//           align="start"
//           w="50%"
//           bg="lightgray"
//           p="4"
//           borderRadius="md"
//         >
//           <Heading mb="4">Teenpatti - Rules and Regulations</Heading>
          
//           <Box bg="lightblue" p="2" mb="2" borderRadius="md">
//             GAME OBJECTIVES
//           </Box>
//           <Text mb="4">To guess whether Player A or Player B will get a better hand.</Text>
          
//           <Box bg="lightblue" p="2" mb="2" borderRadius="md">
//             GAME RULES
//           </Box>
//           <Text mb="2">Hands dealt: 2 (3 cards for Player A, 3 cards for Player B)</Text>
//           <Text mb="4">Bets: Highest hand wins.</Text>
  
//           <Image
//             h="300px"
//             src="https://rg-assests.royalgaming.online/common/teenpatti-rules.jpg"
//             alt="Teenpatti Rules"
//             mb="4"
//           />
  
//           <Heading size="sm" mb="2">
//             Side Bets:
//           </Heading>
//           <Text mb="4">
//             Pair Plus: When the user bets on Pair Plus markets, Payouts are defined as below for the runner the bets are placed.
//           </Text>
  
//           <Table variant="simple" w="50%" mb="4">
//             <Thead>
//               <Tr>
//                 <Th>Hands</Th>
//                 <Th>Payout</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               <Tr>
//                 <Td>Pair</Td>
//                 <Td>1 to 1</Td>
//               </Tr>
//               <Tr>
//                 <Td>Flush</Td>
//                 <Td>1 to 4</Td>
//               </Tr>
//               <Tr>
//                 <Td>Straight</Td>
//                 <Td>1 to 6</Td>
//               </Tr>
//               <Tr>
//                 <Td>Straight flush</Td>
//                 <Td>1 to 35</Td>
//               </Tr>
//               <Tr>
//                 <Td>Trio</Td>
//                 <Td>1 to 45</Td>
//               </Tr>
//             </Tbody>
//           </Table>
  
//           <Text mb="2">
//             Number Ranking: Lowest to highest: 2, 3, 4, 5, 6, 7,8, 9, 10, Jack, Queen, and King (Ace can be "1" or "14").
//           </Text>
//           <Text mb="4">Suit Ranking (Highest to Lowest): Spades, Hearts, Clubs, Diamonds</Text>
  
//           <Box bg="lightblue" p="2" mb="2" borderRadius="md">
//             PAYOUT
//           </Box>
//           <Text mb="4">Payout as per the bet placed</Text>
  
//           <Table variant="simple" w="50%" mb="4">
//             <Tbody>
//               <Tr>
//                 <Td>Player A</Td>
//                 <Td>1 to 0.98</Td>
//               </Tr>
//               <Tr>
//                 <Td>Player B</Td>
//                 <Td>1 to 0.98</Td>
//               </Tr>
//             </Tbody>
//           </Table>
//         </Flex>
//       </Flex>
//     );
//   };
  
//   export default PopUp;
  