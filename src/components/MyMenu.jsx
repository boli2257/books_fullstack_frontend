
import { Menu, Button, TextInput, Modal } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export const MyMenu = ({setIsAdmin}) => {
    const navigate = useNavigate()
     const [value, setValue] = useState('');
     const [opened, { toggle }] = useDisclosure();
     const [ModalOpened, {open:openModal, close:closeModal}] = useDisclosure()
     const [password, setPassword] = useState()

     const handleLogin = () => {
        console.log(password)
        if(import.meta.env.VITE_ADMIN_PW == password){
          setIsAdmin(true)
          closeModal()
          setPassword("")
          navigate("/dashboard")  
        }else{
          alert("Hibás jelszó!")
          setPassword("")
        }
     }
  return (

<>
    <Menu
    opened={opened} 
    onChange={toggle}
    >

      <Menu.Target>
        <Burger opened={opened} onClick={toggle}  aria-label="Toggle navigation" color='white'/>
      </Menu.Target>

      <Menu.Dropdown>
        
        <Menu.Item onClick={()=>navigate("/")}>Kategóriák</Menu.Item>
        <Menu.Item onClick={()=>navigate("/books")}>Összes könyv</Menu.Item>
        <Menu.Item onClick={openModal}>Admin belépés</Menu.Item>
        <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder='keresés címben...'
            rightSection={<IconSearch size={14} 
                    style={{cursor:"pointer"}}
                    onClick={()=>navigate("/search/"+value)}
            
                            />}
            />
            
      </Menu.Dropdown>
    </Menu>

    <Modal opened={ModalOpened} onClose={closeModal} title="Admin belépés">
            
            <TextInput
              data-autofocus
              label="Admin jelszó"
              placeholder="password"
              mt="md"
              value={password}
              type='password'
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Belépés</Button>
    </Modal>
    
</>
  );
}
