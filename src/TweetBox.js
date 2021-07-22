import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Prasad Renukdas',
            username: 'prasarnukdas',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU',
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
           <form>
                <div className="tweetBox__input">
                    <Avatar src="aa"/>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} placeholder="What's happening?"></input>
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" placeholder="Enter Image URL"></input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form> 
        </div>
    )
}

export default TweetBox
