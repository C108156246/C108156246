import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const comment = {
    data: new Data(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <App
        data={comment.data}
        text={comment.text}
        author={comment.author}
        />,
        document.getElementById('root')
);