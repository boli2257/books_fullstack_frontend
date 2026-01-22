import { IconX } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBooks, getBooksByCateg } from '../utils'
import { Box, Flex, Loader, Paper, Title } from '@mantine/core'
import { MyCard } from './MyCard'

const Books = () => {
    
    const {isLoading, status, data, error, isError } = useQuery({queryKey: ['books'],queryFn: getBooks})
    const xIcon = <IconX size={20}/>
  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center" style={{paddingTop:"100px", paddingBottom:"10px"}}>
       
        {isLoading && <Loader color="blue" />}
        {isError && <Notification icon={xIcon} color='red' title="Bummer!">{error.message}</Notification>}
        {data && data.data.map(obj=>
            <Box key={obj.id}>
              {console.log(obj)}
                <MyCard {...obj} categ={true}/>
            </Box>
        )
        
        }
        </Flex>
  )
}

export default Books