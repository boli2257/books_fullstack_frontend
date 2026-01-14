import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useViewportSize } from '@mantine/hooks';
import './App.css'
import { Text, Paper, Flex, Affix, Center } from '@mantine/core';
import { Categories } from './components/Categories';
function App() {
  const {height, width} = useViewportSize();
  

  return (
    <div>
      <Flex mih={height}  gap="sm" justify="center" align="center" direction="column" wrap="wrap">
         
      <Affix position={{ top: "20px",}}><Text ta="center">Válogass a kategóriák közöttt</Text></Affix>
    <Categories/>
    </Flex>
    
    </div>
  )
}

export default App
