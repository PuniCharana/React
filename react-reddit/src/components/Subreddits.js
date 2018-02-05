import React, {Component} from 'react';
import Subreddit from './Subreddit'

class  Subreddits extends Component {
    
    constructor() {
        super();
        this.state = {
            subreddits: []
        }
    }
    componentDidMount () {

        fetch('https://www.reddit.com/subreddits/.json')
        .then(response => response.json())
        .then(parseJson => parseJson.data.children.map(subreddit => subreddit.data))
        .then(subreddits => this.setState({
            subreddits : subreddits
        }))
        .catch(error => console.log(error))
    }

    render() {

        return(
            <div className='subreddits'>
                {
                    this.state.subreddits.map(subreddit => {
                        return <Subreddit key={subreddit.id} subreddit={subreddit} />
                    })
                }
            </div>
        );
    };
};

export default Subreddits;