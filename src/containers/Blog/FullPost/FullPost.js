import React, {Component} from 'react';
import axious from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
      console.log(this.props);
      if (this.props.match.params.id) {
            if (!this.state.loadedPost
                || this.state.loadedPost
                && this.state.loadedPost.id !== this.props.id) {
            axious.get('http://jsonplaceholder.typicode.com/posts/'
                + this.props.match.params.id)
                .then(response => {
                    this.setState({loadedPost: response.data})
                });
            }
        }
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;