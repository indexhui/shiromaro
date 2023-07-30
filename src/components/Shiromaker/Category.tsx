import { Text, Flex } from '@chakra-ui/react'
import { Container } from 'components/UI/Container'
import CategoryOption from 'components/Shiromaker/CategoryOption'

interface OptionPanelProps {
  activeTab: string
  handleTabChange: (tab: string) => void
  activeSubTab: {
    outline: string
    face: string
    other: string
    background: string
  }
  handleSubTabChange: (tab: string, item: string) => void
}

const OPTION_ITEMS = [
  {
    name: '臉型/髮型',
    id: 'outline',
    options: [
      {
        id: 'faceShape',
        zh: '臉型',
      },
      {
        id: 'hairStyle',
        zh: '髮型',
      },
      {
        id: 'hairAccessories',
        zh: '髮飾',
      },
    ],
  },
  {
    name: '面容',
    id: 'face',
  },
  {
    name: '其他',
    id: 'other',
  },
  {
    name: '背景',
    id: 'background',
  },
]

export function Category(props: OptionPanelProps) {
  const { activeTab, handleTabChange, activeSubTab, handleSubTabChange } = props
  return (
    <Container bgColor="bg-container-main">
      <Flex direction="column" w="100%" pt="8px">
        <Flex
          pb="6px"
          gap="8px"
          overflowX="scroll"
          justify="flex-start"
          sx={{
            '&::-webkit-scrollbar': {
              height: '3px',
              background: 'blue.600',
              cursor: 'pointer',
              //display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'blue.700',
              borderRadius: '4px',
            },
          }}
        >
          {OPTION_ITEMS.map((item) => (
            <CategoryOption
              key={item.id}
              isActive={activeTab === item.id}
              //handleClick={()=>handleTabChange}
              handleClick={() => handleTabChange(item.id)}
              id={item.id}
            >
              {item.name}
            </CategoryOption>
          ))}
        </Flex>
        <Flex
          pt="6px"
          gap="8px"
          overflowX="scroll"
          justify="flex-start"
          sx={{
            '&::-webkit-scrollbar': {
              height: '6px',
              background: 'blue.600',
              cursor: 'pointer',
              //display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'blue.700',
              borderRadius: '4px',
            },
          }}
        >
          {OPTION_ITEMS?.[0].options?.map((item, index) => (
            <CategoryOption
              key={item.id}
              isActive={item.id === activeSubTab.outline}
              //handleClick={()=>handleTabChange}
              handleClick={() => handleSubTabChange(activeTab, item.id)}
              id={item.id}
            >
              {item.zh}
            </CategoryOption>
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}
