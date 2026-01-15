import { Box, Center, Flex, Loader, Notification, Paper, Text, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCategories } from '../utils'
import { IconX } from '@tabler/icons-react'
import './Categories.css'
import { Navigate, useNavigate } from 'react-router-dom'

export const Categories = () => {
    const navigate = useNavigate()
  const {isLoading, status, data, error, isError } = useQuery({queryKey: ['categories'],queryFn: getCategories})
    const xIcon = <IconX size={20}/>
  data && console.log(data.data)
  isError && console.log(error)
  return (
    <Flex direction={'column'} justify={'flex-start'} gap={'md'}>
    {isLoading && <Loader color="gray" />}
    {isError && <Notification icon={xIcon} color='red' title="Ops, something went wrong!">{error.message}</Notification>}
    {data && data.data.map(obj=>
        <Box key={obj.id}>
      <Paper className='categories' shadow="lg" radius="xl" withBorder p="xl" style={{width:"300px", textAlign:"center"}}>
            <Title order={3} style={{textAlign:'center'}} onClick={()=>navigate('/books/categ/'+obj.id)}>{obj.name}</Title>
          </Paper>
    </Box>
    )
    
    }
    </Flex>
  )
}

