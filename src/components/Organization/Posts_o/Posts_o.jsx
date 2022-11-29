import SinglePost from '../SinglePost_o/SinglePost_o';
import classes from './Posts_o.module.scss';

//import SinglePost from '../SinglePost/SinglePost';
//import classes from './Posts.module.scss';

const Posts = ({ posts = [] }) => {
  const mappedPosts = posts.map(post => {
    return (
      <SinglePost
        key={post._id}
        username={post.username}
        email={post.email}
      />
    );
  })

  return (
    <section className={classes["feed-posts-section"]} >
      <h3>  </h3>

      <div className={classes["posts"]}>
        {mappedPosts}
      </div>
    </section>
  );
}

export default Posts;