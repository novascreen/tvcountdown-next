import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import ShowList from 'components/Show/ShowList'
import Card from 'components/UI/Card'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { tvmazeService } from 'services/tvmaze.service'
import { Show } from 'types'

export const Search = () => {
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
  const noResults = !!searchId && !isLoading && !shows.length

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
      <Box width={600} maxWidth="calc(100%)" mx="auto">
        {noResults && (
          <Card p={2} my={5}>
            <Text>Could not find any shows</Text>
          </Card>
        )}
        {!!shows.length && (
          <Box>
            <ShowList shows={shows} />
          </Box>
        )}
      </Box>
    </Box>
  )
}
