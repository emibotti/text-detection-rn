import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { CustomFooter } from 'src/components/CustomFooter'

const PendingView = () => (
  <View
    style={{
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      flex: 1,
      justifyContent: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
)

export class Home extends React.Component<{}> {
  public static navigationOptions = () => {
    return {
      title: 'Text detection',
    }
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
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
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}
                >
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            )
          }}
        </RNCamera>
        <CustomFooter />
      </View>
    )
  }

  public takePicture = async (camera: any) => {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options)
    //  eslint-disable-next-line
    console.log(data.uri)
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
    flex: 1,
    justifyContent: 'flex-end',
  },
})
