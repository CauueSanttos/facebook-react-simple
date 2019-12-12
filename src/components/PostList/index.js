import React, { Component } from 'react';

import './styles.css';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Vinicius Castro",
          avatar: "https://api.adorable.io/avatars/45/abott@adorable.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Cauê Santos",
              avatar: "https://api.adorable.io/avatars/45/abott@adorable.png"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Cauê Santos",
          avatar: "https://api.adorable.io/avatars/45/abott@adorable.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a TwoDevs está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Vinicius Castro",
              avatar: "https://api.adorable.io/avatars/45/abott@adorable.png"
            },
            content: "A TwoDevs está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div id="container-postlist">
        {this.state.posts.map(post => (
          <Post key={post} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;