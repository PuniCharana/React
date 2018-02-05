import React from 'react';
import { NavLink } from 'react-router-dom';
import MdArrowUpward from 'react-icons/lib/md/arrow-upward'
import MdArrowDownward from 'react-icons/lib/md/arrow-downward'

const checkURL = (url) => {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

const  Post = (props) => {
    console.log(props.post)
    const {author, title, permalink, score, created, thumbnail} = props.post
    return(
        <div className='post'>

            <div className='vote'>
                <MdArrowUpward/>
                <p>{score}</p>
                <MdArrowDownward/>
            </div>
            {
                checkURL(thumbnail)?<img src={thumbnail}/>:null
            }
            <div className='details'>
                <NavLink to={permalink}>{title}</NavLink>
                <p>
                    <span className='author'>{author} </span>
                    <span className='created'>{created} </span>
                </p>
            </div>
        </div>
    );
};

export default Post;