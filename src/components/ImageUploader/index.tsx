import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import PhotoController from 'src/networking/controllers/PhotoController'
import { PendingView } from '../PendingView'
import { styles } from './styles'
import { OuterProps } from './types'

export const ImageUploader: React.FunctionComponent<OuterProps> = ({
  photo,
  setPhoto,
}) => {
  const [loading, setLoading] = useState(false)

  const handlePhoto = async () => {
    setLoading(true)
    try {
      const response = await PhotoController.postPhoto(photo)
      if (response) {
        alert(`Uploaded: Msg> ${response.status} ${response.data}`)
        setPhoto(undefined)
        setLoading(false)
      } else {
        alert('Error')
      }
    } catch (error) {
      setLoading(false)
      alert('Upload failed!')
    }
  }

  return (
    <View style={styles.container}>
      {photo && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: photo.uri }}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity onPress={handlePhoto} style={styles.uploadButton}>
            {loading ? (
              <PendingView />
            ) : (
              <Text style={styles.uploadButtonText}> Upload </Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
