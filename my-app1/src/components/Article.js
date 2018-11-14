import React from 'react'
import PropTypes from 'prop-types'



function Comment (props) {
    return <h4>{props.defaultcomment}Comment</h4>
}
class Article extends React.Component{
    state = {
        visible: false,
        comment:"",
    }

  /*  handleAddComments = comment=> {
        const nextComment = [comment, ...this.state.news]
        this.setState({ comment: nextComment })
      }
      */

    handReadMoreClck = (e) => {
        e.preventDefault();
        this.setState({ visible: true })
    }
    handChangeInput = (e) => {
       this.setState({comment:e.currentTarget.value});
    }
    handAddComment = (e) =>{
        this.setState({comment:e.value});

    }
    render() {
        const { author, text, bigText } = this.props.data;
        const {defaultcomment} = this.props;
        const { visible,comment} = this.state;
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                {
                    !visible && <a href="#readmore" className='news__readmore' onClick={this.handReadMoreClck}>More... </a>
                    
                }
                {
                    visible && <p className="news__big-text">{bigText}<br/>
                    <p className="comment_news">Комментарии:<br/><Comment comment={defaultcomment}></Comment>{comment}</p>
                    <input type="text" value={comment} onChange={this.handChangeInput}></input> <br/> 
                    <button onClick={this.handAddComment} className="btn_comment"> Добавить комментарий</button></p>
                }
            </div>
        )
    }
}
Article.propTypes = {
    data:PropTypes.shape({
    id:PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText:PropTypes.string.isRequired,
  }),
}
export { Article }
