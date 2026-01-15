import { Affix, Box, Center, Flex, Loader, Notification, Paper, Text, Title } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getbooksbycateg } from '../utils'
import { MyCard } from './MyCard'
import { useViewportSize } from '@mantine/hooks'

export const BooksByCateg = () => {
  const {height, width} = useViewportSize()
  const {categId} = useParams()
  const {isLoading, status, data, error, isError } = useQuery({queryKey: ['booksbycateg',categId],queryFn: getbooksbycateg})
  const xIcon = <IconX size={20}/>
  return (
    <Flex direction={'column'} justify={'flex-start'} gap={'md'} p={"100px"}>
        {isLoading && <Loader color="gray" />}
        {isError && <Notification icon={xIcon} color='red' title="Ops, something went wrong!">{error.message}</Notification>}
        {data&&<Title style={{textAlign:"center", color:"gray", marginBottom:"50px"}}>{data.data[0].name}</Title>}
        {data && data.data.map(obj=>
            <Box key={obj.id}>
              <MyCard {...obj}/>
        </Box>
        )
        
        }
        </Flex>
  )
}