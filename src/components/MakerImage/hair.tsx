import hair01_1 from 'assets/images/shiromaker/hair/hair01_color01.png'
import hair01_2 from 'assets/images/shiromaker/hair/hair01_color02.png'
import hair01_3 from 'assets/images/shiromaker/hair/hair01_color03.png'
import hair01_4 from 'assets/images/shiromaker/hair/hair01_color04.png'
import hair01_5 from 'assets/images/shiromaker/hair/hair01_color05.png'

export type HairColor = {
  color01: string
  color02: string
  color03: string
  color04: string
  color05: string
}

export type Hair = {
  type01: HairColor
  // type02: Color
  // type03: Color
}

export const hair: Hair = {
  // type01-color01: faceShape01_1,
  type01: {
    color01: hair01_1,
    color02: hair01_2,
    color03: hair01_3,
    color04: hair01_4,
    color05: hair01_5,
  },
}
