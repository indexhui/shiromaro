import { useState, useEffect } from 'react'
import { Flex, Grid, GridItem, AspectRatio, Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { faceShape, FaceShape, hair, Hair } from 'components/MakerImage'
import { ColorOptionPanel } from 'components/Shiromaker'

import 'swiper/css/pagination'

/// every SwiperSlide should have six options

type GroupComponentProps = {
  group: string[]
  activeColor: string
}

const GroupComponent = (props: GroupComponentProps) => {
  const { activeColor, group } = props
  if (activeColor === 'faceShape') {
    return (
      <Grid
        rounded="md"
        w="100%"
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        padding="12px"
        pt="5px"
        gap="12px"
      >
        {group.map((item) => {
          const key = item as unknown as keyof FaceShape
          return (
            <GridItem>
              <AspectRatio ratio={1} w="100%" key={item}>
                <Flex
                  w="100%"
                  rounded="sm"
                  bgSize="cover"
                  bgPosition="center"
                  bgColor="whiteAlpha.300"
                  bgImage={faceShape?.[key]?.color01}
                ></Flex>
              </AspectRatio>
            </GridItem>
          )
        })}
      </Grid>
    )
  } else {
    return (
      <Grid
        rounded="md"
        w="100%"
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        padding="12px"
        pt="5px"
        gap="12px"
      >
        {group.map((item) => {
          const key = item as unknown as keyof Hair
          return (
            <GridItem>
              <AspectRatio ratio={1} w="100%" key={item}>
                <Flex
                  w="100%"
                  rounded="sm"
                  bgSize="cover"
                  bgPosition="center"
                  bgColor="whiteAlpha.300"
                  bgImage={hair?.[key]?.color01}
                ></Flex>
              </AspectRatio>
            </GridItem>
          )
        })}
      </Grid>
    )
  }
}

const objToArray = (obj: Object) => {
  return Object.keys(obj)
}

function chunkArray(array: any, size: number) {
  const chunks = []
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    chunks.push(chunk)
  }
  return chunks
}

export function OptionsContainer(props: any) {
  const [show, setShow] = useState(faceShape)
  const { activeColor } = props
  useEffect(() => {
    if (activeColor === 'faceShape') {
      setShow(faceShape)
    }
  }, [activeColor])
  console.log('activeColor', activeColor)
  const groups = chunkArray(objToArray(show), 6)

  return (
    <Flex w="100%" flex="1" direction="column">
      <ColorOptionPanel activeColor={activeColor} />
      <Flex flex="1" w="100%">
        <Swiper
          spaceBetween={32}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {groups.map((group, index) => (
            <SwiperSlide key={index}>
              <GroupComponent group={group} activeColor={activeColor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  )
}
