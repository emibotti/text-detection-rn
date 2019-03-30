import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RNCamera, TakePictureResponse } from 'react-native-camera'
import { styles } from './styles'
import { PendingView } from '../PendingView'

export interface OuterProps {
  setPhoto: (photo: TakePictureResponse) => void
}

export const Camera: React.FunctionComponent<OuterProps> = ({ setPhoto }) => {
  const takePicture = (camera: RNCamera) => async () => {
    try {
      const options = { quality: 0.5, base64: true }
      const data = await camera.takePictureAsync(options)
      if (data) {
        setPhoto(data)
      }
    } catch (error) {
      alert('Sorry, error taking the photo')
      console.log('Error photo taking, ', error)
    }
  }

  return (
    <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.auto}
      permissionDialogTitle={'Permission to use camera'}
      permissionDialogMessage={
        'We need your permission to use your camera phone'
      }
      captureAudio={false}
    >
      {({ camera, status }) => {
        if (status !== 'READY') return <PendingView />
        return (
          <View style={styles.snapButton}>
            <TouchableOpacity
              onPress={takePicture(camera)}
              style={styles.capture}
            >
              <Text style={styles.snapText}> SNAP </Text>
            </TouchableOpacity>
          </View>
        )
      }}
    </RNCamera>
  )
}
