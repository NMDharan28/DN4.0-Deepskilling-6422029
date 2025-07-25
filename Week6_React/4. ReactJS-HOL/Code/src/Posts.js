// src/Posts.js
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        // Replace placeholder data with more meaningful display
        const postList = data.slice(0, 5).map((item, index) => {
          const titles = [
            'Mastering React Lifecycle Methods',
            '10 Tips for Writing Clean JavaScript',
            'Understanding Asynchronous Programming in JS',
            'A Beginner’s Guide to REST APIs',
            'Debugging Techniques Every Developer Should Know'
          ];

          const bodies = [
            'React lifecycle methods help you control what happens during different stages of a component’s life...',
            'Writing clean code is essential. Start by using meaningful variable names and breaking code into functions...',
            'JavaScript is single-threaded but supports async operations via callbacks, promises, and async/await...',
            'REST APIs allow systems to communicate over HTTP. They use standard methods like GET, POST, PUT, DELETE...',
            'Debugging is more than just fixing errors. It involves understanding call stacks, using breakpoints, and testing assumptions...'
          ];

          return new Post(item.id, titles[index], bodies[index]);
        });

        this.setState({ posts: postList });
      })
      .catch((error) => {
        console.error('Error loading posts:', error);
        this.setState({ hasError: true });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred while rendering posts.');
    console.error('Caught error:', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1 style={{ textAlign: 'center' }}>Developer Blog Highlights</h1>
        {this.state.posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h2 style={{ color: '#333' }}>{post.title}</h2>
            <p style={{ color: '#555', fontSize: '16px' }}>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
