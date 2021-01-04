import { SearchIcon } from '@chakra-ui/icons'
import {
  AspectRatio,
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { tvmazeService } from 'services/tvmaze.service'
import { Show } from 'types'

export const Search = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800')

  const [input, setInput] = useState('')
  const [searchId, setSearchId] = useState('')
  const { data, isLoading } = useQuery<Show[]>(
    ['search', searchId],
    () => tvmazeService.search(input),
    {
      enabled: !!searchId,
    }
  )
  const shows = data ?? []

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    if (!e.target.value) setSearchId('')
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSearchId(Date.now().toString())
    },
    [input]
  )

  return (
    <Box>
      <Center>
        <form onSubmit={handleSubmit}>
          <InputGroup width={300}>
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
            <Input
              borderRadius="full"
              colorScheme="red"
              value={input}
              onChange={handleInputChange}
              type="search"
            />
          </InputGroup>
        </form>
      </Center>
      {!!shows.length && (
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing={3}
          my={5}
          px={3}
          width={800}
          maxWidth="calc(100%)"
          mx="auto"
        >
          {shows.map((show) => {
            const image = show.image?.original ?? ''
            const year = show.premiered ? show.premiered.split('-')[0] : 'N/A'
            const network = show.network?.name ?? show.webChannel?.name ?? ''
            return (
              <AspectRatio
                borderRadius="lg"
                bg={bgColor}
                bgImage={`url(${image})`}
                bgSize="cover"
                bgPos="center center"
                ratio={3 / 4}
              >
                <Box borderRadius="lg">
                  <Box
                    position="absolute"
                    bottom={0}
                    px={3}
                    py={3}
                    w="100%"
                    bg="rgba(0,0,0,0.7)"
                    color="white"
                  >
                    <Text>{show.name}</Text>
                    <Text>
                      {year}, {network}
                    </Text>
                  </Box>
                </Box>
              </AspectRatio>
            )
          })}
        </SimpleGrid>
      )}
    </Box>
  )
}
