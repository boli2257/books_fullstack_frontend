import { Box, Flex, Loader, Notification, Paper, Text, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCategories } from '../utils'
import { IconX } from '@tabler/icons-react'
import './Categories.css'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const navigate = useNavigate()
    const {isLoading, status, data, error, isError } = useQuery({queryKey: ['categories'],queryFn: getCategories})
    const xIcon = <IconX size={20}/>
  data && console.log(data.data)
  //isLoading && <Loader color="blue" />;
  isError && console.log(error)
  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center">
    {isLoading && <Loader color="blue" />}
    {isError && <Notification icon={xIcon} color='red' title="Bummer!">{error.message}</Notification>}
    {data && data.data.map(obj=>
        <Box key={obj.id}>
      <Paper className='category' shadow="lg" radius="xl" withBorder p="xl" style={{width:"300px", textAlign:"center"}}onClick={()=>navigate("/books/category/"+obj.id)}>
            <Title order={3} >{obj.name}</Title>
          </Paper>
    </Box>
    )
    
    }
    </Flex>
  )
}

export default Categories