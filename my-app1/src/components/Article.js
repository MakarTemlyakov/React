import React from 'react'
import PropTypes from 'prop-types'

class ShowComments extends React.Component{
    render() {
        return (
            <div>
                <p><strong>Комментарии:</strong><br/></p>
                {this.props.comments.map((comment)=>{
                    return <p>>><em>{comment}</em></p>
                })}
            </div>
        )
    }
}
class AddComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newComment:" "
        }
        this.handChange = this.handChange.bind(this);
        this.handAddComment = this.handAddComment.bind(this);
    }
    validate =() => {
        const {newComment} = this.state;
        if(newComment.trim()) {
            return true;
        }
        return false;
    }
    handChange(e){
        this.setState({newComment:e.target.value})
    }
    handAddComment(){
        this.props.addNewComment(this.state.newComment)
        this.setState({newComment:''})
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.newComment} onChange={this.handChange} />
                <button onClick={this.handAddComment} disabled={!this.validate()}>Add comment</button>
            </div>
        )
    }
}

class Article extends React.Component{
    constructor(props){
        super(props);        
        this.state = {
            visible: false,
            comments:['Стандартный коммент'],
        }
        this.addComment = this.addComment.bind(this);
    }
    addComment(comment) {
        this.setState((state) => ({
          comments: state.comments.concat([comment])
        }))
      }
    handReadMoreClck = (e) => {
        e.preventDefault();
        this.setState({ visible: true })
    }
    render() {
        const { author, text, bigText } = this.props.data;
        const { visible } = this.state;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                {
                    !visible && <a href="#readmore" className='news__readmore' onClick={this.handReadMoreClck} >More...</a>
                }
                {
                    visible &&<div className="news__big-text">{bigText}<br/>
                                <ShowComments comments={this.state.comments}/>
                                <AddComment addNewComment={this.addComment}/>   
                             </div>   
                }
                
            </div>
        )
    }
}
AddComment.propTypes = {
    addNewComment: PropTypes.func.isRequired
}
Article.defaultProps = { comments:[]}
Article.propTypes = {
    data:PropTypes.shape({
    id:PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText:PropTypes.string.isRequired,
  }),
}
export { Article }
