import React, {Component} from 'react';
import axious from 'axios';

import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axious.get('http://jsonplaceholder.typicode.com/posts')
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
      });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  };

  render() {
    const posts = this.state.posts.map(post => {
      return <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
      />;
    });

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <section className="Posts">
          {posts}
        </section>
      </div>
    );
  }
}

export default Blog;