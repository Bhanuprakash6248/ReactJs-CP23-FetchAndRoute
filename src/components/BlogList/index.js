// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formatedData = data.map(each => ({
      id: each.id,
      author: each.author,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      imgUrl: each.image_url,
      title: each.title,
    }))
    this.setState({blogData: formatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogData} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogData-con">
            {blogData.map(each => (
              <BlogItem key={each.id} blogItemDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
