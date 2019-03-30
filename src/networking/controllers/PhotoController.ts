import { Platform } from 'react-native'
import HttpService from '../HttpService'
import { Photo } from './types'

class PhotoController {
  public postPhoto = (photo: Photo) =>
    HttpService.post('/api/form/', {
      img: photo.base64,
    })
}

export default new PhotoController()
