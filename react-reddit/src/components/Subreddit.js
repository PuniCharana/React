import React from 'react';
import { NavLink } from 'react-router-dom';

const  Subreddit = (props) => {
    
    const {title, public_description, subscribers, created, url} = props.subreddit

    const foo = (time) => {
        var seconds = Math.floor(((new Date().getTime()/1000) - new Date(time))),
        interval = Math.floor(seconds / 31536000);

        if (interval > 1) return interval + "y";

        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + "m";

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) return interval + "d";

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) return interval + "h";

        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + "m";

        return Math.floor(seconds) + "s";
    }

    const bar= (number)=> {
        var SI_POSTFIXES = ["", "k", "M", "G", "T", "P", "E"];
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
        if(tier === 0) return number;
        var postfix = SI_POSTFIXES[tier];
        var scale = Math.pow(10, tier * 3);
        var scaled = number / scale;
        var formatted = scaled.toFixed(1) + '';
        if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2);
        return formatted + postfix;
    }

    const cleanUrl = (url)=>{
        var foo = url.split("/");
        return foo[2].toLowerCase()
    }

    return(
        <div className='subreddit'>
            <NavLink to={"posts/"+cleanUrl(url)}>{title}</NavLink>
            <p>{public_description}</p>
            <p><span>{bar(subscribers)} subscribers,</span><span> a community since {foo(created)}</span></p>
        </div>
    );
};

export default Subreddit;