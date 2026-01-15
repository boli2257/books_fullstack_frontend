import './App.css'
import { Flex, Button, Affix, Title } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks'
import { Books } from './components/Books';
import { BooksByCateg } from './components/BooksByCateg';
import { Categories } from './components/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyMenu } from './components/MyMenu';
import SearchResult from './components/SearchResult';
function App() {
  const {height, width} = useViewportSize()
  const isMobile =useMediaQuery('(max-width:520px )')
  return ( 
    <BrowserRouter>
      <Flex mih={height} gap="md" justify="center" align="center" direction="row" wrap="wrap" bg="var(--mantine-color-blue-light)">
        
        <Affix position={{top:20}} style={{width:width}}>
            <Title order={3} c="var(--mantine-color-blue-8)" style={{textAlign:"center"}}>Könyvtár</Title>
        </Affix>
        <Affix position={{top:isMobile ? 50:20, left:10}}>
          <MyMenu/>
        </Affix>
      
      <Routes>
        <Route path="/" element={<Categories/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/books/categ/:categId" element={<BooksByCateg/>}/>
        <Route path="/books/search/:txt" element={<SearchResult/>}/>
      </Routes>
      </Flex>
    </BrowserRouter>
  )
}

export default App