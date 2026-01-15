import { Menu, Button, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { IconCategory2 } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconBooks } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export const MyMenu =()=> {
    const navigate = useNavigate()
    const [value, setValue] = useState('');
    const [opened, { toggle }] = useDisclosure();

  return (
    <Menu opened={opened} onChange={toggle}>
      <Menu.Target>
        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" color='var(--mantine-color-blue-6)'/>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={()=>navigate("/")} leftSection={<IconCategory2 size={14} />}>
          Kategóriák
        </Menu.Item>
        <Menu.Item onClick={()=>navigate("/books")} leftSection={<IconBooks size={14} />}>
          Könyvek
        </Menu.Item>
        <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} 
        placeholder='Keresés címben...' leftSection={<IconSearch size={14}  
        style={{cursor:'pointer'}} onClick={()=>navigate("/books/search/"+value)}/>}/>
      </Menu.Dropdown>
    </Menu>
  );
}
