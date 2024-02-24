import { Box, Flex, Button, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Game_Fun = () => {
  const [button1Click, setButton1Click] = useState(false);
  const [button2Click, setButton2Click] = useState(false);
  const [timer, setTimer] = useState(10);
  const [amount, setAmount] = useState(10000);
  // Button
  const [buttonState, setButtonState] = useState([50, 100, 500, 1000, 25000]);
  useEffect(() => {
    const timerFunction = () => {
      setTimer((prevTime) => {
        if (prevTime === 0) {
          setButton1Click(true);
          setButton2Click(true);
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    };
    const intervalId = setInterval(timerFunction, 1000);
    return () => clearInterval(intervalId);
  }, []);
const newArr = [];
  const handleEvent = (DeductAmount) => {
    setAmount((prevAmount) => {
      const newAmount = prevAmount - DeductAmount;

      if (newAmount <= 0) {
        alert("Insufficient Amount!");
        setAmount(0);
      }
      newArr.push(newAmount)
      console.log(newArr,"new Array");
      return newAmount;
    });
  };
  
const handleUndo = ()=>{
  setAmount()
}
  const handleButton1Click = () => {
    console.log("Player A ");
    setButton2Click(true);
  };

  const handleButton2Click = () => {
    console.log("Player B ");
    setButton1Click(true);
  };

  return (
    <>
      <Flex justify="center" align="center" h="100vh" direction="column">
        <Heading size="l">Remaining Amount:- {amount}</Heading>

        <Heading size="l">Timer :- {timer}</Heading>

        <Flex direction="row" gap="1rem">
          {buttonState.map((btns, index) => {
            return (
              <Button key={index} onClick={() => handleEvent(btns)}>
                {btns}
              </Button>
            );
          })}
        </Flex>
        <Box>
          <Button
            m="1rem"
            onClick={handleButton1Click}
            isDisabled={button1Click}
          >
            Player A
          </Button>
          <Button onClick={handleButton2Click} isDisabled={button2Click}>
            Player B
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Game_Fun;

// import { useState } from "react";
// // import "./styles.css";

// const Game_Fun = () => {
//   const [activeButton, setActiveButton] = useState('');

//   const handleClick = (buttonNumber) => {
//     console.log("hello");
//     setActiveButton(buttonNumber);
//   };

//   return (
//     <div className="button-container">
//       <button
//         className={activeButton === 1 ? "active" : ""}
//         onClick={() => handleClick(1)}
//         disabled={activeButton === 2}
//       >
//         Button 1
//       </button>

//       <button
//         className={activeButton === 2 ? "active" : ""}
//         onClick={() => handleClick(2)}
//         disabled={activeButton === 1}
//       >
//         Button 2
//       </button>
//     </div>
//   );
// };

// export default Game_Fun;
