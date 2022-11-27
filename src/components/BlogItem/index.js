// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogsData

  return (
    <Link to={`blogs/${id}`}>
      <div className="for-border">
        <img src={imageUrl} className="image1" alt={title} />
        <div>
          <p className="para">{topic}</p>
          <h1 className="para2">{title}</h1>
          <div className="image-name">
            <img src={avatarUrl} className="image2" alt={title} />
            <p className="para3">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
