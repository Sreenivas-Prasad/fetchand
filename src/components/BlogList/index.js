// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const url = 'https://apis.ccbp.in/blogs'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.map(each1 => ({
      id: each1.id,
      title: each1.title,
      author: each1.author,
      avatarUrl: each1.avatar_url,
      imageUrl: each1.image_url,
      topic: each1.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(eachItem => (
            <BlogItem blogsData={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
