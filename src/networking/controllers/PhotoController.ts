import { TakePictureResponse } from 'react-native-camera'
import HttpService from '../HttpService'

class PhotoController {
  public postPhoto = (photo?: TakePictureResponse) => {
    if (photo) {
      return HttpService.post('/api/form/', {
        img: photo.base64,
      })
    }
    throw new Error('Sorry, photo undefined')
  }
}

export default new PhotoController()
