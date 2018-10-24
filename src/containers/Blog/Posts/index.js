import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios/index';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Piper'
          };
        });

        this.setState({posts: updatedPosts});
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
        // this.setState({error: true});
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push({pathname: '/' + id});
  };


  render() {
    const posts = this.state.posts.map(post => {
      return (
        //<Link to={'/' + post.id} key={post.id} >
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        //</Link>
      );
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
      </div>
    );
  }
}

Posts.propTypes = {};

export default Posts;
