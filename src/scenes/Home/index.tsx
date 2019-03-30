import React, { useState } from 'react'
import { View } from 'react-native'
import { TakePictureResponse } from 'react-native-camera'
import { Camera } from 'src/components/Camera'
import { CustomFooter } from 'src/components/CustomFooter'
import { ImageUploader } from 'src/components/ImageUploader'
import { styles } from './styles'

export const Home: React.FunctionComponent<{}> = () => {
  const navigationOptions = () => {
    return {
      title: 'Text detection',
    }
  }

  const [photo, setPhoto] = useState<TakePictureResponse | undefined>(undefined)

  return (
    <View style={{ flex: 1 }}>
      <Camera setPhoto={setPhoto} />
      <ImageUploader setPhoto={setPhoto} photo={photo} />
      <View style={styles.footerContainer}>
        <CustomFooter />
      </View>
    </View>
  )
}
