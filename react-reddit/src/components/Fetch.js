import React, {Component} from 'react';
import Post from './Post'

class  Fetch extends Component {
    
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        // fetch('https://www.reddit.com/r/funny/.json')
        // .then(response => response.json())
        // .then(parseJson => console.log(parseJson))
        // .catch(error => console.log(error))

        fetch('https://www.reddit.com/r/funny/.json')
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

export default Fetch;