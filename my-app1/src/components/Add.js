import React from 'react'
import PropTypes from 'prop-types'
class Add extends React.Component{
    state = {
        name: '',
        agree:false,
        text: '',
        bigText: '',
    }
    validate = () => {
        const { name, text, agree } = this.state;
        if (name.trim() && text.trim() && agree) {
            return true;
        }
        return false;
    }
    handRuleBox = (e) => {
        this.setState({agree:e.currentTarget.checked});
    }
    onBtnClickHand = (e) => {
        e.preventDefault();
        const {name, text, bigText} = this.state;    
        this.props.onAddNews({
            id: +new Date(),
            author: name,
            bigText, 
            text,
        })
    }
    handChange = (e) => {
        const {id, value } = e.currentTarget;
        this.setState({ [id]: value});
    }
    render() {
        const { name, text, bigText} = this.state;
        return (
            <form className='add'>
                <input id='name' type='text' className='add__author' placeholder='Your name' onChange={this.handChange} value={name} />
                <textarea id='text' className='add__text' placeholder="News text" onChange={this.handChange} value={text}></textarea>
                <textarea id='bigText' onChange={this.handChange} className="add__text" placeholder="Text news more" value={bigText}></textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' onChange={this.handRuleBox}/>Im agree with rules
                </label>
                <button className='add__btn' onClick={this.onBtnClickHand} disabled={!this.validate()}>
                    Show alert
                </button>
            </form> 
        )
    }
}
Add.propTypes ={
    onAddNews: PropTypes.func.isRequired,
}
export { Add }