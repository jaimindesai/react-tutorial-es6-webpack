import React,{Component} from 'react';
import CommentsForm from './comments-form';
import CommentsList from './comments-list';
import axios from 'axios';

class CommentsBox extends Component {

   constructor(props){
     super(props);
     this.state = {data:[]}
   }
   loadCommets(){
        axios.get('/api/comments')
        .then((response)=>{
          if(response.status===200){
            this.setState({data:response.data});
          } else {
            throw new Error("Server response wasn't ok");
          }
        });
   }
   handleCommentsSubmit(comment){
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        axios.post('/api/comments',comment)
        .then((response)=>{
          if(response.status===200){
            this.setState({data:response.data});
          } else {
            throw new Error("Post response wasn't ok");
          }
        });
   }
   componentDidMount(){
     this.loadCommets();
     setInterval(this.loadCommets(), this.props.pollInterval);
   }
  render() {
    return(
        <div className="commentBox">
         <h1>Comments</h1>
         <CommentsList data={this.state.data}/>
         <CommentsForm onCommentSubmit={this.handleCommentsSubmit.bind(this)}/>
        </div>
    );
  }
}

export default CommentsBox;
