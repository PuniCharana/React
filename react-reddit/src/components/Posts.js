import React, {Component} from 'react';
import Post from './Post'

class  Posts extends Component {
    
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    
    componentDidMount () {
        console.log(this.props)

        fetch('https://www.reddit.com/r/'+ this.props.match.params.post_url+'/.json')
        .then(response => response.json())
        .then(parseJson => parseJson.data.children.map(post => post.data))
        .then(posts => this.setState({
            posts : posts
        }))
        .catch(error => console.log(error))
    }

    render() {

        return(
            <div className='posts'>
                {
                    this.state.posts.map(post => {
                        return (
                            <Post key={post.id} post={post}/>
                        )
                    })
                } 
            </div>
        );
    };
};

export default Posts;