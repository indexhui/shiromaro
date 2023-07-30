import { Flex, Text } from '@chakra-ui/react'

type OptionItemProps = {
  children: React.ReactNode
  id: string
  isActive?: boolean
  handleClick?: () => void
}

const CategoryOption = (props: OptionItemProps) => {
  const { children, isActive, handleClick } = props
  return (
    <Flex
      // w={1 / 4}
      flexShrink="0"
      fontSize="16px"
      rounded="full"
      border="1px solid white"
      align="center"
      justify="center"
      cursor="pointer"
      _hover={{ bgColor: 'blue.700' }}
      bgColor={isActive ? 'blue.700' : 'transparent'}
      onClick={handleClick}
      p="2px 20px"
      minW="100px"
      //w="auto"
    >
      <Text>{children}</Text>
    </Flex>
  )
}

export default CategoryOption
