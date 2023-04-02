import React, { useState } from 'react';
import './App.css';
import {Box,Text, Button, ButtonGroup, Stack} from '@chakra-ui/react'

function App() {
  let [state, setState] = useState(0);
  function b1() {
    setState(state + 5)
  }
  function b2() {
    setState(state - 3)
  }
  function b3() {
    setState(0)
  }
  return (
    <div>
      
      <Text padding="0px 10px" textAlign="center" fontSize='30px' color='white'>{state}</Text>
  <Stack direction='column'>
    <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    >
      <ButtonGroup gap='3'>
        
        <Button className='b1' border="2px solid green" bgColor='green' onClick={b1} color='white'>+5</Button>
        <Button className='b2' border="2px solid red" bgColor='red' color='white' onClick={b2}>-3</Button>
        <Button className='b3' border="2px solid black" bgColor='black' color='white' onClick={b3}>Clear</Button>
      </ButtonGroup>
    </Box>

  </Stack>
      
    </div>
  );
}
export default App;
