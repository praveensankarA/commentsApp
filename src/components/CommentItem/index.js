// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItems = props => {
  const {val, like, deleteFunction} = props
  //   cosole.log(val.)

  const likeit = () => {
    like(val.id)
  }
  const delFun = () => {
    deleteFunction(val.id)
  }

  const imgUrl = val.isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeClassName = val.isLiked ? 'btn-name-s' : 'btn-name'

  return (
    <li className="list-ele">
      <br />
      <div className="logo-name-time-container">
        <p className={`${val.color} logo`}>{val.name[0].toUpperCase()}</p>
        <p className="name">{val.name}</p>
        <p className="time">{formatDistanceToNow(val.date)}</p>
      </div>
      <div className="comment">
        <p className="comment-text">{val.comment}</p>
      </div>
      <div className="like-btn-delete-btn-container">
        <div>
          <button
            type="button"
            className="like-btn-container a"
            onClick={likeit}
          >
            <img src={imgUrl} alt="Like" className="like-logo" />
            <p className={likeClassName}>Like</p>
          </button>
        </div>
        <button
          type="button"
          onClick={delFun}
          data-testid="delete"
          className="like-btn-container1 b"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="like-logo"
          />
        </button>
      </div>
      <br />
      <hr className="hr" />
    </li>
  )
}
export default CommentItems
