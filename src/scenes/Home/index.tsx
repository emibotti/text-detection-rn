import React from 'react'
import { Text, View } from 'react-native'
import { CustomFooter } from 'src/components/CustomFooter'

export class Home extends React.Component<{}> {
  public static navigationOptions = () => {
    return {
      title: 'Text detection',
    }
  }

  public render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Hey</Text>
        <CustomFooter />
      </View>
    )
  }
}
