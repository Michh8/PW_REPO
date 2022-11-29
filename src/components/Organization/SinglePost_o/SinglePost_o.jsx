import classes from './SinglePost_o.module.scss';
import { MdFavoriteBorder, MdBookmarkBorder } from 'react-icons/md';
import { AiOutlineUser } from "react-icons/ai";

import temp from '../../../assets/main/user.png';

const SinglePost = ({ username = "" , email =""}) => {
  return (
    <article className={classes["post"]} >
      <h1> APOYA A ESTA ORGANIZACION. CONTACTALOS! 🤓</h1>
      <h2>A continuación te compartimos la informacion de contacto de este usuario.</h2>
       <AiOutlineUser /> <h1> Usuario: {username} </h1>
       <h2>📧 Email de contacto: {email} </h2>
        

      <figure>
        <img src={temp} alt="Post  Image" />
      </figure>

    </article>
  );
}

export default SinglePost;