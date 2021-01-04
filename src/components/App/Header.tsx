import { Box, Center, Text } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Search } from './Search'
// import { DarkModeSwitch } from './DarkModeSwitch'

export const Header = () => (
  <>
    {process.env.NODE_ENV === 'development' && <DarkModeSwitch />}
    {/* <Flex
      bg="primary.main"
      color="primary.contrastText"
      px={2}
      py={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <IconButton
          aria-label="Search shows"
          icon={<SearchIcon />}
          colorScheme="transparent"
          color="primary.contrastText"
        />
      </Box>
    </Flex> */}
    <Box py={3} flexGrow={0} width="100%">
      <Center mb={3}>
        <Text fontSize="xl">TVCountdown</Text>
      </Center>
      <Box>
        <Search />
      </Box>
    </Box>
  </>
)
