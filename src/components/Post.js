import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <View style={styles.PostContainer}>
    <Text style={styles.title}>{post.title}</Text>
    <View style={styles.border}>
      <Text style={styles.author}>{post.author}</Text>
    </View>
    <Text style={styles.description}>{post.description}</Text>

  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  PostContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: '#DA6C6C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    color: '#333333',
    fontWeight: 'bold'
  },
  author: {
    color: '#999999',
    textAlign: 'left',
    paddingBottom: 10,
  },
  description: {
    textAlign: 'left',
    color: '#666666',
    paddingTop: 20,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
});

export default Post;