import { StarIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import Card from 'components/UI/Card'
import React from 'react'
import { Show } from 'types'

interface Props {
  shows: Show[]
}

const ShowList = ({ shows }: Props) => {
  const { colorMode } = useColorMode()
  return (
    <SimpleGrid columns={[1]} spacing={3} my={5} px={3}>
      {shows.map((show) => {
        const image = show.image?.original ?? ''
        const year = show.premiered ? show.premiered.split('-')[0] : 'N/A'
        const network = show.network?.name ?? show.webChannel?.name ?? ''
        return (
          <Flex as={Card} alignItems="center">
            <AspectRatio width={75} bg="hsla(0,0%,50%,0.3)" ratio={3 / 4}>
              {show.image ? (
                <Image src={image} alt={show.name} objectFit="cover" />
              ) : (
                <Text transform="rotateZ(-45deg)" opacity={0.2} fontSize={10}>
                  TVCountdown
                </Text>
              )}
            </AspectRatio>
            <Box p={3} flexGrow={1}>
              <Text>{show.name}</Text>
              <Text color={`${colorMode}.textSubtle`}>{year}</Text>
              <Text color={`${colorMode}.textSubtle`}>{network}</Text>
            </Box>
            <Box w={8}>
              <StarIcon />
            </Box>
          </Flex>
        )
      })}
    </SimpleGrid>
  )
}

export default ShowList
