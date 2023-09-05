import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import CommentItems from '../CommentItem'
import './index.css'

// import {formatDistanceToNow} from 'date-fns'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    comments: [
      {
        id: uuidv4(),
        date: new Date(),
        name: 'Nandha',
        comment:
          'LinkedIn allows people to share their thoughts, ideas, and insights into specific issues or interests. Such sharing of information helps future recruiters to know about your knowledge and passion. It effectively shows would-be employers that the individual is on top of the industry trends and insights.',
        color:
          initialContainerBackgroundClassNames[
            Math.ceil(
              Math.random() * initialContainerBackgroundClassNames.length - 1,
            )
          ],
        isLiked: false,
      },
      {
        id: uuidv4(),
        date: new Date(),
        name: 'Gnana raj',
        comment:
          "LinkedIn is the world's largest professional network on the internet. You can use LinkedIn to find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career.",
        color:
          initialContainerBackgroundClassNames[
            Math.ceil(
              Math.random() * initialContainerBackgroundClassNames.length - 1,
            )
          ],
        isLiked: false,
      },
    ],
    name: '',
    comment: '',
  }

  onSubmitFunction = event => {
    event.preventDefault()
    const {comments, name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      date: new Date(),
      name,
      comment,
      color:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
      isLiked: false,
    }

    this.setState(privState => ({
      comments: [...privState.comments, newComment],
    }))
    console.log(comments)

    this.setState({comment: '', name: ''})
  }

  onChangFunctionForName = event => {
    this.setState({name: event.target.value})
  }

  onChangFunctionForComment = event => {
    this.setState({comment: event.target.value})
  }

  deleteFunction = id => {
    const {comments} = this.state

    const ans = comments.filter(each => each.id !== id)

    this.setState({comments: ans})
  }

  likeFunction = id => {
    const {comments} = this.state
    const ans = comments.map(eachContact => {
      if (id === eachContact.id) {
        return {...eachContact, isLiked: !eachContact.isLiked}
      }
      return eachContact
    })
    this.setState(prevState => ({
      comments: ans,
    }))
  }

  render() {
    const {comments, name, comment} = this.state
    console.log(comments)
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="title-container">
            <h1 className="main-head">Comments</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
            <form onSubmit={this.onSubmitFunction}>
              <p className="intro-text">Say something about LinkedIn </p>
              <input
                onChange={this.onChangFunctionForName}
                type="text"
                value={name}
                placeholder="Your Name"
                className="name-input"
              />
              <textarea
                value={comment}
                onChange={this.onChangFunctionForComment}
                placeholder="Your Comment"
                className="comment-box"
              />
              <div className="btn-container">
                <button type="submit" className="submit-btn">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comment-img-lg"
            alt="comments"
          />
        </div>
        <hr />
        <p className="comment-count-para">
          <span className="comment-count">{comments.length}</span>
          Comments
        </p>
        <br />
        <ul className="comment-list-container">
          {comments.map(each => (
            <CommentItems
              deleteFunction={this.deleteFunction}
              like={this.likeFunction}
              val={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
