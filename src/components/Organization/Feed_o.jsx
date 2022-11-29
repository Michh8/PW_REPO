import { useState, useEffect } from 'react';
import classes from './Feed_o.module.scss';

//import NewPostForm from "./NewPostForm/NewPostForm";
import Posts from "./Posts_o/Posts_o";
import temp from '../../assets/main/org.png';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useConfigContext } from '../../contexts/ConfigContext';
import { useUserContext } from '../../contexts/UserContext';

const Feed = () => {
  const [users, setUsers] = useState([]);
  const { startLoading, stopLoading } = useConfigContext();
  const { token, user } = useUserContext()

  //Esto se ejecuta 1 vez, después del 1er render
  useEffect(() => {
    fetchPosts();
  }, []);

  //función fetch para todos los elementos
  const fetchPosts = async () => {
    try {
      startLoading();
      //const response = await fetch("http://localhost:3500/api/post/");
      const { data } = await axios.get("/user");
      setUsers(data.users);

    } catch (error) {
      toast.error("Unexpected error!");
    } finally {
      stopLoading();
    }
  }

  

  return (
    <div className={classes["feed-wrapper"]}>
      <figure>

        <img  className={classes["the"]} src={temp} alt="" />
      </figure>

      {/* Main Feed */}
      <Posts posts={users} />
    </div>
  )
}

export default Feed;