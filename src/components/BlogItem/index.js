// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imgUrl, avatarUrl, topic, author} = blogItemDetails

  return (
    <li className="listItem-con">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-con">
          <div className="item-con1">
            <img src={imgUrl} alt={`item${id}`} className="image" />
          </div>
          <div className="item-con2">
            <p className="title">{topic}</p>
            <h1 className="topic">{title}</h1>
            <div className="avatar-con">
              <img
                src={avatarUrl}
                alt={`avatar ${id}`}
                className="avatar-img"
              />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
