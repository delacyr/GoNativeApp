/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';

// import Post from './src/components/Post';

import Reactotron from 'reactotron-react-native';
import Post from './components/Post';

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Lorem Ipsum',
        author: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue sem et urna tincidunt posuere. Praesent bibendum hendrerit turpis. Ut ultrices porta ante vitae pulvinar.',
      },
      {
        id: 1,
        title: 'Lorem Ipsum',
        author: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue sem et urna tincidunt posuere. Praesent bibendum hendrerit turpis. Ut ultrices porta ante vitae pulvinar.',
      },
      {
        id: 2,
        title: 'Lorem Ipsum',
        author: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue sem et urna tincidunt posuere. Praesent bibendum hendrerit turpis. Ut ultrices porta ante vitae pulvinar.',
      },
      {
        id: 3,
        title: 'Lorem Ipsum',
        author: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue sem et urna tincidunt posuere. Praesent bibendum hendrerit turpis. Ut ultrices porta ante vitae pulvinar.',
      },
    ],
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.header}>GoNative App</Text>
        <ScrollView>
          { this.state.posts.map(post => <Post key={post.id} post={post} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#EE7777',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    shadowColor: '#DA6C6C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
  },

});
