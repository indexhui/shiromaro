import faceShape01_1 from 'assets/images/shiromaker/face/face01_color01.png'
import faceShape01_2 from 'assets/images/shiromaker/face/face01_color02.png'
import faceShape01_3 from 'assets/images/shiromaker/face/face01_color03.png'
import faceShape01_4 from 'assets/images/shiromaker/face/face01_color04.png'
import faceShape02_1 from 'assets/images/shiromaker/face/face02_color01.png'
import faceShape02_2 from 'assets/images/shiromaker/face/face02_color02.png'
import faceShape02_3 from 'assets/images/shiromaker/face/face02_color03.png'
import faceShape02_4 from 'assets/images/shiromaker/face/face02_color04.png'
import faceShape03_1 from 'assets/images/shiromaker/face/face03_color01.png'
import faceShape03_2 from 'assets/images/shiromaker/face/face03_color02.png'
import faceShape03_3 from 'assets/images/shiromaker/face/face03_color03.png'
import faceShape03_4 from 'assets/images/shiromaker/face/face03_color04.png'

export type Color = {
  color01: string
  color02: string
  color03: string
  color04: string
}

export type FaceShape = {
  type01: Color
  type02: Color
  type03: Color
}

export const faceShape: FaceShape = {
  // type01-color01: faceShape01_1,
  type01: {
    color01: faceShape01_1,
    color02: faceShape01_2,
    color03: faceShape01_3,
    color04: faceShape01_4,
  },
  type02: {
    color01: faceShape02_1,
    color02: faceShape02_2,
    color03: faceShape02_3,
    color04: faceShape02_4,
  },
  type03: {
    color01: faceShape03_1,
    color02: faceShape03_2,
    color03: faceShape03_3,
    color04: faceShape03_4,
  },
}

//export default faceShape
