import React from 'react'
import { Text, View } from 'react-native'

export class Home extends React.Component<{}> {
  public static navigationOptions = () => {
    return {
      title: 'Text detection',
    }
  }

  public render() {
    return (
      <View>
        <Text>Hey</Text>
      </View>
    )
  }
}
