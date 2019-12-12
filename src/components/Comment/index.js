import React from 'react';

import './styles.css';

export default function Comment({ comment }) {
  return (
    <div className="post-comment">
      <div>
        <img src={comment.author.avatar} alt="Avatar" />
      </div>
      <div className="comment-description">
        <strong>{comment.author.name}</strong> {comment.content}
      </div>
    </div>
  );
}
