// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogData: []}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const formatedData = {
      id: data.id,
      title: data.title,
      imgUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    console.log(data)
    this.setState({blogData: formatedData, isLoading: false})
  }

  renderBlogDataDetails = () => {
    const {blogData} = this.state
    const {title, imgUrl, avatarUrl, author, content} = blogData

    return (
      <div className="blog-bg">
        <h1>{title}</h1>
        <div className="blogAvatar-con">
          <img src={avatarUrl} className="avatar-img" alt={author} />
          <p>{author}</p>
        </div>
        <img src={imgUrl} className="title-img" alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDataDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
