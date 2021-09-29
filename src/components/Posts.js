import React, { Component } from 'react';
import AddPosts from './AddPosts';
import { v4 as uuidv4 } from 'uuid';

export default class Posts extends Component {
  
  state={posts :[
    {id:uuidv4(),
     title : 'Título 1',
     autor : 'titulo1',
    },
    {
    id:uuidv4(),
    title : 'Título 2',
    autor : 'titulo2',

    },
    { 
        id:uuidv4(),
        title : 'Título 3',
        autor : 'titulo3',
    }
  ]
}

addPosts =(post)=>{
  post.id =uuidv4();
  let oldPosts = this.state.posts;
  let newPosts =oldPosts;
  newPosts.push(post);
  this.setState(
    {
      posts:newPosts
    })
}
  render() {
    return (
      <div> 
          <AddPosts addPosts={this.addPosts}/>
        {this.state.posts.map((post) =>
            <div key={post.id}>
            <h1>{post.title}</h1>
            <h2>{post.autor}</h2>
            </div>
        )}
     </div>
    );
  }
}
