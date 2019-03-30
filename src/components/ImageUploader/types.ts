import { TakePictureResponse } from 'react-native-camera/types'

export interface OuterProps {
  photo?: TakePictureResponse
  setPhoto: (photo?: TakePictureResponse) => void
}
