import { Button, Flex, Modal, ScrollArea, Table, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { createBook, deleteBook, editBook, readBooks } from '../utils';
import { RiPencilFill } from "react-icons/ri";
import { TbTrashFilled } from "react-icons/tb";

const Dashboard = () => {
    const [books, setBooks] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [newBook, setNewBook] = useState({title:"", author:"", description:""})
    const [editingBook, setEditingBook] = useState(null)
    useEffect(()=>{
        readBooks(setBooks)
    }, [])
    
    const rows = books.map((obj) => (
        <Table.Tr key={obj.id}>
        <Table.Td>{obj.id}</Table.Td>
      <Table.Td>{obj.title}</Table.Td>
      <Table.Td>{obj.author}</Table.Td>
      <Table.Td>{obj.description}</Table.Td>
      <Table.Td>{obj.category}</Table.Td>
      <Table.Td>{obj.cover}</Table.Td>
      <Table.Td>{obj.rating}</Table.Td>
      <Table.Td>{<RiPencilFill size={20} color='blue' style={{cursor:"pointer"}} onClick={()=>handleEdit(obj)}/>}</Table.Td>
      <Table.Td>{<TbTrashFilled size={20} color='red' style={{cursor:"pointer"}} onClick={()=>handleDelete(obj.id)}/>}</Table.Td>
    </Table.Tr>
  ));
  
    const handleDelete = async (id) => {
        try {
            const response = await deleteBook(id)
            alert(response?.msg)
            setBooks(prev=>prev.filter(obj=>obj.id!=id))
        } catch (error) {
            console.log(error)
            // alert(response?.error)
        }
    }

    const handleEdit = (book) => {
        setEditingBook(book)
        setNewBook(book)
        setShowForm(true)
        editBook(book.id)
    }
  
    const handleChange = (e) => {
        setNewBook({...newBook, [e.target.name]:e.target.value})
    }

    const handleSave = async () => {
        try {
            if(editingBook){
                console.log("módosítás")
                const updatedBook = await editBook(editingBook.id, newBook)
                setBooks(prev=>prev.map(obj=>obj.id==editingBook.id ? updatedBook : obj))
            }else{
                const bookToSave = {...newBook, category_id:1, cover:"borító", rating:5}
                const savedBook = await createBook(bookToSave)
                setBooks((prev)=>[...prev, savedBook])
            }
            setShowForm(false)
            setNewBook({title:"", author:"", description:""})
            setEditingBook(null)
        } catch (error) {
            console.log(error)
        }
    }


  

  return (
<>
    <Flex direction="column" gap="md" justify="flex-start" align="center">
        <ScrollArea h={600} bg="#eff2ff">
            <Table stickyHeader withColumnBorders withRowBorders withTableBorder>
                <Table.Thead>
                    <Table.Tr>
                    <Table.Th>Id</Table.Th>
                    <Table.Th>Cím</Table.Th>
                    <Table.Th>Szerző</Table.Th>
                    <Table.Th>Leírás</Table.Th>
                    <Table.Th>Kategória</Table.Th>
                    <Table.Th>Kép</Table.Th>
                    <Table.Th>Értékelés</Table.Th>
                    <Table.Th>Szerkesztés</Table.Th>
                    <Table.Th>Törlés</Table.Th>
                </Table.Tr>
             </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
            <Table.Caption>Összesen {books && books.length} könyv van a könyvtárban</Table.Caption>
           
         </Table>
        </ScrollArea>
        <Button onClick={()=>setShowForm(true)}>Új könyv hozzáadása</Button>
    </Flex>


        <Modal opened={showForm} onClose={()=>setShowForm(false)} title="Form">
            <TextInput label="Cím" name='title' placeholder="Könyv címe" value={newBook.title} onChange={handleChange} required />
            <TextInput label="Szerző" name='author' placeholder="Szerző neve" value={newBook.author} onChange={handleChange} required />
            <TextInput label="Leírás" name='description' placeholder="Könyv leírása" value={newBook.description} onChange={handleChange} required />
            <Button onClick={handleSave}>Mentés</Button>
        </Modal>
</>
  );
}

export default Dashboard