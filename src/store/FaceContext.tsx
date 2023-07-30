import React, { useState } from 'react'
//import { faceShape } from 'components/MakerImage'
import type { Color, FaceShape } from 'components/MakerImage'

type initialStateType = {
  outline: {
    faceShape: {
      type: keyof FaceShape
      color: keyof Color
    }
    // hairStyle: {
    //   type: number
    //   skinColor: Color
    // }
  }
}

const initialState: initialStateType = {
  outline: {
    faceShape: {
      type: 'type01',
      color: 'color01',
    },
    // hairStyle: {
    //   type: 0,
    //   skinColor: 'skin01',
    // },
  },
}

type FaceContextType = {
  face: typeof initialState
}

const FaceContext = React.createContext<FaceContextType>({
  face: initialState,
})
//const FaceContext = React.createContext(initialState)
export const FaceProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [face, setFace] = useState<typeof initialState>(initialState)

  return (
    <FaceContext.Provider value={{ face }}>
      {props.children}
    </FaceContext.Provider>
  )
}

export const useFaceContext = () => {
  const { face } = React.useContext(FaceContext)
  const setFace = (face: typeof initialState) => {
    setFace(face)
  }
  return { face, setFace }
}
