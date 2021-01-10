import { chakra, useColorMode, ChakraProps } from '@chakra-ui/react'
import React, { FC } from 'react'

const Card: FC<ChakraProps> = ({ children, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <chakra.div
      borderRadius="lg"
      bg={`${colorMode}.bgCard`}
      overflow="hidden"
      boxShadow="base"
      {...props}
    >
      {children}
    </chakra.div>
  )
}

export default Card
