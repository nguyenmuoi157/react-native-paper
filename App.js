
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {createStore} from 'redux';
import { Provider as PaperProvider,Button,Appbar,BottomNavigation, Card} from 'react-native-paper';

import DefaultTheme from './src/styles/DefaultTheme';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const cardcomponent = ()=> <Card>
                              <Card.Actions>
                                  <Button>Cancel</Button>
                                  <Button>Ok</Button>
                              </Card.Actions>
                            </Card>

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
      { key: 'card', title: 'Card', icon: 'history' },
    ],
  };
  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    card:cardcomponent
  });

  render() {
    return (
      <PaperProvider theme={theme}>
      <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          barStyle={{backgroundColor:'#fff'}}
          inactiveColor='#2B3A4A'
          activeColor='#236AB9'
        />
        {/* <Text style={{backgroundColor:'#236AB9'}}></Text> */}
      </PaperProvider>
    );
  }
}
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});