import React, {Component}  from 'react'
import Comments from './comments';

class CommentsList extends Component {
  renderComment(){
  		return this.props.data.map((comment) => {
  			return(
          <Comments author={comment.author} key={comment.id}>
            {comment.text}
          </Comments>
  				);
  		});
  	}
  render() {
   return(
     <div className ="commentsList">
     {this.renderComment()}
        </div>
  );
 }
}

export default CommentsList;
