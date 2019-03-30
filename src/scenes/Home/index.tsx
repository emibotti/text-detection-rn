import { Spinner } from 'native-base'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { CustomFooter } from 'src/components/CustomFooter'
import PhotoController from 'src/networking/controllers/PhotoController'
import { Photo } from 'src/networking/controllers/types'

const PendingView = () => <Spinner style={{ height: 10 }} />
interface State {
  photo: Photo | undefined
  loading: boolean
}

export class Home extends React.Component<{}, State> {
  public static navigationOptions = () => {
    return {
      title: 'Text detection',
    }
  }
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      loading: false,
      photo: undefined,
    }
  }

  public render() {
    const { photo, loading } = this.state
    return (
      <View style={{ flex: 1 }}>
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
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={this.takePicture(camera)}
                  style={styles.capture}
                >
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            )
          }}
        </RNCamera>
        <View
          style={{
            alignItems: 'center',
            flex: 2,
            justifyContent: 'flex-start',
          }}
        >
          {photo && (
            <View
              style={{ flex: 2, alignItems: 'center', alignSelf: 'stretch' }}
            >
              <Image
                source={{ uri: photo.uri }}
                style={{
                  aspectRatio: 1,
                  flex: 2,
                  marginBottom: 0,
                  marginTop: 10,
                }}
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={this.handlePhoto(photo)}
                style={{
                  backgroundColor: '#5c6668',
                  marginTop: 5,
                  padding: 20,
                  alignItems: 'center',
                  borderRadius: 8,
                  position: 'absolute',
                  bottom: -30,
                }}
              >
                {loading ? (
                  <PendingView />
                ) : (
                  <Text style={{ fontSize: 14, color: 'white' }}> Upload </Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{ flex: 1 }}>
          <CustomFooter />
        </View>
      </View>
    )
  }
  public handlePhoto = (photo: Photo) => async () => {
    this.setState({ loading: true })
    try {
      const response = await PhotoController.postPhoto(photo)
      if (response) {
        alert(`Uploaded: Msg> ${response.status} ${response.data}`)
        this.setState({ photo: undefined, loading: false })
      } else {
        alert('Error')
      }
    } catch (error) {
      this.setState({ loading: false })
      alert('Upload failed!')
    }
  }

  public takePicture = (camera: RNCamera) => async () => {
    try {
      const options = { quality: 0.5, base64: true }
      const data = await camera.takePictureAsync(options)
      if (data) {
        this.setState({
          photo: data,
        })
      }
    } catch (error) {
      alert('Sorry, error taking the photo')
      console.log('Error photo taking, ', error)
    }
  }
}

const styles = StyleSheet.create({
  capture: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 0,
    margin: 20,
    padding: 15,
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'flex-end',
  },
})
