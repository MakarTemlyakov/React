import React from 'react'
import PropTypes from 'prop-types'
import { Article } from './Article'

class News extends React.Component {
        renderNews = () => {
          const { data } = this.props
          let newsTemplate = null
          if (data.length) {
            newsTemplate = data.map(function(item) {
              return <Article key={item.id} data={item}/>
            })
          } else {
            newsTemplate = <p>You dont have news</p>
          }
          return newsTemplate
        }
        render() {
          const { data } = this.props
  
          return (
            <div className='news'>
              {this.renderNews()}
              {
                data.length ? <strong className={'news__count'}>All news: {data.length}</strong> : null
              }
            </div>
          );
        }
      }
          
News.propTypes = {
  data: PropTypes.array.isRequired,
}

export { News }
