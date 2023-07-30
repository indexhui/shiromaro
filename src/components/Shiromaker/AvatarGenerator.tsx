import React, { useState } from 'react'
import { Flex, HStack, Button, AspectRatio } from '@chakra-ui/react'
import { useFaceContext } from 'store/FaceContext'
import { faceShape } from 'components/MakerImage'
//import faceShape from 'components/MakerImage/faceShape'

//  setShiro({
//    ...shiro,
//    bg: randomArr(shiroface.bg),
//    face: randomDoubleArr(shiroface.face),
//    blush: randomArr(shiroface.blush),
//    hair: randomDoubleArr(shiroface.hair),
//    clothes: randomArr(shiroface.clothes),
//    mouth: randomArr(shiroface.mouth),
//    eyes: randomArr(shiroface.eyes),
//    eyebrow: randomDoubleArr(shiroface.eyebrow),
//    accessories: randomArr(shiroface.accessories),
//  })

// type FaceShapeImage = {
//   faceShapeImage: string
// }

export function AvatarGenerator() {
  const { face } = useFaceContext()
  const propertyName = face.outline.faceShape.color
  //const propertyName = 'skin01'
  const [userFace, setUserFace] = useState({
    faceShapeImage: faceShape.type01[face.outline.faceShape.color],
  })
  // setUserFace({
  //   faceShapeImage: faceShape.type01.color.skin01,
  // } as )

  return (
    <Flex w="100%" bgColor="bg-container-sub" justify="center" py="32px">
      <Flex w="40%" direction="column" gap="12px">
        <AspectRatio w="100%" ratio={1}>
          <Flex
            bgSize="cover"
            bgPosition="center"
            //bgImage={faceShape.type01.color.skin01}
            //bgImage={userFace.faceShapeImage}
            bgImage={[
              `url('${userFace.faceShapeImage}')`,
              `url('${userFace.faceShapeImage}')`,
            ]}
            bgColor="white"
            rounded="md"
          ></Flex>
        </AspectRatio>
        <HStack w="100%">
          <Button w="unset" flex="1">
            儲存
          </Button>
          <Button w="unset" flex="1">
            下載
          </Button>
        </HStack>
      </Flex>
    </Flex>
  )
}
