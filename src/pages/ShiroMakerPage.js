import { useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import {
  AvatarGenerator,
  Category,
  OptionsContainer,
} from 'components/Shiromaker'

export function ShiroMakerPage() {
  const [activeTab, setActiveTab] = useState('outline')
  const [activeSubTab, setActiveSubTab] = useState({
    outline: 'faceShape',
    face: 'hair',
    other: 'other',
    background: 'normalBg',
  })
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    console.log('tab', tab)
  }
  const handleSubTabChange = (tab, index) => {
    setActiveSubTab({ ...activeSubTab, [tab]: index })
    console.log('tab', tab)
    console.log('index', index)
  }
  return (
    <>
      <Flex>
        <Flex
          width="375px"
          height="667px"
          rounded="md"
          bgColor="bg-container-main"
          color="container-text"
          direction="column"
          align="center"
          justify="center"
        >
          <Flex>
            <Text>Shiromaker</Text>
          </Flex>
          <AvatarGenerator />
          <Category
            handleTabChange={handleTabChange}
            activeTab={activeTab}
            activeSubTab={activeSubTab}
            handleSubTabChange={handleSubTabChange}
          />
          <OptionsContainer activeColor={activeSubTab[activeTab]} />
        </Flex>
      </Flex>
    </>
  )
}
