import { IconX } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getBooksByCateg } from '../utils'
import { Box, Flex, Loader, Paper, Title } from '@mantine/core'
import { MyCard } from './MyCard'

const BooksByCateg = () => {
    const {categId} = useParams()
    const {isLoading, status, data, error, isError } = useQuery({queryKey: ['booksbycateg', categId],queryFn: getBooksByCateg})
    const xIcon = <IconX size={20}/>
  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center" style={{paddingTop:"100px", paddingBottom:"10px"}}>
        <Title style={{color:"indigo"}}>{data && data.data[0].category}</Title>
        {isLoading && <Loader color="blue" />}
        {isError && <Notification icon={xIcon} color='red' title="Bummer!">{error.message}</Notification>}
        {data && data.data.map(obj=>
            
            <Box key={obj.id}>
                <MyCard {...obj} categ={false}/>
            </Box>
        )
        
        }
        </Flex>
  )
}

export default BooksByCateg