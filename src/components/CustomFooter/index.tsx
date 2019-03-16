import { Button, Container, Footer, FooterTab, Icon, Text } from 'native-base'
import React, { useState } from 'react'
import { styles } from './styles'

export interface ToggleTab {
  setTabs: (tabs: boolean[]) => void
  idx: number
}

const toggleTab = (setTabs: (tabs: boolean[]) => void, idx: number) => () => {
  const tabs = [false, false, false, false]
  tabs[idx] = true
  setTabs(tabs)
}

const setTabTextColor = (isActive: boolean) =>
  isActive ? styles.activeButtonText : styles.buttonText

const setTabBgColor = (isActive: boolean) =>
  isActive ? styles.activeButtonBg : undefined

export const CustomFooter: React.FunctionComponent<{}> = () => {
  const [tabs, setTabs] = useState([false, false, true, false])

  return (
    <Container>
      <Footer style={styles.footer}>
        <FooterTab>
          <Button
            vertical={true}
            active={tabs[0]}
            onPress={toggleTab(setTabs, 0)}
            style={setTabBgColor(tabs[0])}
          >
            <Icon
              active={tabs[0]}
              name="apps"
              style={setTabTextColor(tabs[0])}
            />
            <Text style={setTabTextColor(tabs[0])}>Apps</Text>
          </Button>
          <Button
            vertical={true}
            active={tabs[1]}
            onPress={toggleTab(setTabs, 1)}
            style={setTabBgColor(tabs[1])}
          >
            <Icon
              style={setTabTextColor(tabs[1])}
              active={tabs[1]}
              name="camera"
            />
            <Text style={setTabTextColor(tabs[1])}>Camera</Text>
          </Button>
          <Button
            vertical={true}
            active={tabs[2]}
            onPress={toggleTab(setTabs, 2)}
            style={setTabBgColor(tabs[2])}
          >
            <Icon
              style={setTabTextColor(tabs[2])}
              active={tabs[2]}
              name="compass"
            />
            <Text style={setTabTextColor(tabs[2])}>Compass</Text>
          </Button>
          <Button
            vertical={true}
            active={tabs[3]}
            onPress={toggleTab(setTabs, 3)}
            style={setTabBgColor(tabs[3])}
          >
            <Icon
              style={setTabTextColor(tabs[3])}
              active={tabs[3]}
              name="contact"
            />
            <Text style={setTabTextColor(tabs[3])}>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}
