import classes from './SinglePost.module.scss';
import { MdFavoriteBorder, MdBookmarkBorder } from 'react-icons/md';
import { AiOutlineUser } from "react-icons/ai";
const SinglePost = ({ title = "", description = "", image = "", user = "" }) => {
  return (
    <article className={classes["post"]} >
      <h4> {title} </h4>
      <AiOutlineUser /> <h5> {user} </h5>
     
      <p>
        {description}
      </p>

      <figure>
        <img src={image} alt="Post  Image" />
      </figure>

      <div className={classes["actions"]}>
        <div>
          <MdFavoriteBorder /> 1550 likes
        </div>

        <div>
          <MdBookmarkBorder /> Bookmark
        </div>
      </div>
    </article>
  );
}

export default SinglePost;