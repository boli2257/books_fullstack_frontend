import { IconX } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getBooksByTitle } from '../utils'
import { Box, Flex, Loader, Notification, Paper, Title } from '@mantine/core'
import { MyCard } from './MyCard'

const SearchResult = () => {
    const {txt} = useParams()
  const {isLoading, status, data, error, isError } = useQuery({queryKey: ['booksbytitle', txt],queryFn: getBooksByTitle})
    const xIcon = <IconX size={20}/>
  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center" style={{paddingTop:"100px", paddingBottom:"10px"}}>
        
        {isLoading && <Loader color="blue" />}
        {isError && <Notification icon={xIcon} color='red' title="Bummer!">{error.message}</Notification>}
        {data && <Title>A keresett könyvcím / könyvcím részlet: {txt}</Title>}
        {data && data.data.length > 0 ? data.data.map(obj=>
            <Box key={obj.id}>
                <MyCard {...obj}/>
            </Box>
        )
        :
        <Notification icon={xIcon} color='orange' title="Bummer!">Nincs találat!</Notification>
        
        }
        </Flex>
  )
}

export default SearchResult