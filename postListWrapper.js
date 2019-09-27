// import React, { useState } from 'react';
// import _ from 'lodash';
// import PostList from './postList';

// const PostListWrapper = (props) =>  {
//   // const initialItems = [
//   //     {'id': 1, 'title': 'Post 1', 'bgColor': '#f9cb9c'},
//   //     {'id': 2, 'title': 'Post 2','bgColor' : '#fee599'},
//   //     {'id': 3, 'title': 'Post 3', 'bgColor': '#e06666'},
//   //     {'id': 4, 'title': 'Post 4', 'bgColor' : '#b6d7a7'}
//   //   ]
//   // const [items, setItems] = useState(initialItems);

//   return (
//     <PostList postList={props.items} onMove={(id, direction)=> {
//       const UP = -1;
//       const DOWN = 1;

//       const position = _.findIndex(items, (i) => i.id === id);
//       if (position < 0) {
//         alert("Given item not found.");
//       } else if (direction === UP && position === 0 || direction === DOWN && position === items.length - 1) {
//         return
//       }

//       const item = items[position]
//       const newItems = _.filter(items, (i) => i.id !== id)
//       newItems.splice(position + direction, 0, item)
//       setItems(newItems);
//     }} />
//   )
// }

// export default PostListWrapper;

import React, { useState } from 'react';
import PostList from './postList';

class PostListWrapper extends React.Component {
  render() {
    return (
      <PostList postList={this.props.items} onClick={() => this.props.onClick(id, direction)} />
    )
  }
}

export default PostListWrapper;