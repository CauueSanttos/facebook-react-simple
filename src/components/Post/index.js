import React from 'react';

import './styles.css';

import Comment from '../Comment';

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post-description">
        <div className="post-header">
          <img src={post.author.avatar} alt="Avatar" />
          <div className="post-title">
            <h4>{post.author.name}</h4>
            <h5>{post.date}</h5>
          </div>
        </div>
        <div className="post-message">
          {post.content}
        </div>
      </div>
      {post.comments.map(comment => (
        <Comment key={comment} comment={comment} />
      ))}
    </div>
  );
}
