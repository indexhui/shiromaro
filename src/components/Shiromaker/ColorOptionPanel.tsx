import { Flex, Text } from '@chakra-ui/react'
import { Container } from 'components/UI/Container'

type ColorOptions = {
  faceShape: string[]
}

const COLOR_OPTIONS: ColorOptions = {
  faceShape: ['#FEF7F1', '#FFF0E3', '#F8E0D1', '#E9C5AC'],
}

export function ColorOptionPanel(props: any) {
  const { activeColor } = props
  console.log('activeColor', activeColor)
  return (
    <Container bgColor="bg-container-main">
      <Flex
        bgColor="whiteAlpha.200"
        w="100%"
        gap="10px"
        rounded="md"
        align="center"
        justify="flex-start"
        p="5px"
        px="12px"
      >
        <Text>Color:</Text>
        <Flex px="12px" py="4px" gap="4px">
          {COLOR_OPTIONS?.[activeColor as keyof ColorOptions]?.map(
            (color: string) => {
              return (
                <Flex
                  key={color}
                  border="2px solid"
                  borderColor="whiteAlpha.400"
                  w="16px"
                  h="16px"
                  rounded="full"
                  bgColor={color}
                ></Flex>
              )
            }
          )}
        </Flex>
      </Flex>
    </Container>
  )
}
