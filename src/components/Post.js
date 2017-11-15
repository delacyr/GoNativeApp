import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from 'react-native';

export default class Post extends Component{
    render() {
      return (
        <View style={styles.PostContainer}>
          <Text style={styles.title}>Aprendendo React Native</Text>
          <Text style={styles.author}>Delacyr Ferreira</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, at quas congue nam, et etiam exerci nemore qui. Vim iusto invenire complectitur cu, sale elitr oportere vel ne. Ea mei fugit libris consectetuer, ex mei unum honestatis. Ut legimus salutatus usu.</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    PostContainer: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        color: '#333333',
        fontWeight: 'bold'
    },
    author: {
        color: '#999999',
        textAlign: 'left'
    },
    description: {
        textAlign: 'left',
        color: '#666666',
        paddingTop: 20
    },
});
