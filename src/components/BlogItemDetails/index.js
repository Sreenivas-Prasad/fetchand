// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const data1 = await response.json()
    const updatedData = {
      id: data1.id,
      title: data1.title,
      author: data1.author,
      avatarUrl: data1.avatar_url,
      imageUrl: data1.image_url,
      topic: data1.topic,
      content: data1.content,
    }
    console.log(updatedData)
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {id, title, author, imageUrl, avatarUrl, topic, content} = blogDetails

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="item-de">
            <h1 className="head-de">{title}</h1>
            <div className="name-image">
              <img src={avatarUrl} className="image2" alt={title} />
              <p>{author}</p>
            </div>
            <img src={imageUrl} className="image-de" alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
