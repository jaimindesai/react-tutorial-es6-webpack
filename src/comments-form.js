import React,{Component} from 'react';

class CommentsForm extends Component{
  constructor(props){
    super(props);
    this.state = {author: '', text: ''}
  }

  handleSubmit(e) {
    e.preventDefault();
      var author =this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  }

  render(){
    return(
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
       <input type="text" placeholder="Your name" ref="author" />
       <input type="text" placeholder="Your comment" ref="text" />
       <input type="submit" value="Post" />
       </form>

    );
  }
}

export default CommentsForm;
