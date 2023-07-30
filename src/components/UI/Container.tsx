import { Flex, HStack, Button, AspectRatio } from '@chakra-ui/react'
export function Container(props: any) {
  return (
    <Flex w="100%" bgColor="bg-container-sub" justify="center" {...props}>
      <Flex w="100%" px="12px">
        {props.children}
      </Flex>
    </Flex>
  )
}
