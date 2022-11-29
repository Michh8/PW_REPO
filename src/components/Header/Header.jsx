import classes from './Header.module.scss';
import Button from '../Button/Button';
import logo from '../../assets/main/logo.png';
import Ghost from '../Ghost/Ghost';

import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { HiHome,HiHeart,HiUserGroup,HiOutlineInformationCircle } from "react-icons/hi";

const Header = () => {
  const { logout, user } = useUserContext();
  const navigate = useNavigate();

  return (
    <section>
      <div className={classes["helper"]}></div>
      <header className={classes["Header"]} >

        <div className={classes["Title"]}>
          <figure>
            <img className={classes["menu-icon"]} src={logo} />
          </figure>

          <h1> La solidaria </h1>
        </div>


        <nav>
          <ul>
            <li><HiHome/><a onClick={() => navigate("/")}className={classes.abutton}> Home</a></li>
            <li id="one"><HiHeart/><a onClick={() => navigate("/Campañas")} className={classes.abutton}> Campañas </a></li>
            <li id="two"><HiUserGroup/><a onClick={() => navigate("/Organizaciones")}  className={classes.abutton}> Organizaciones </a></li>
            <li><HiOutlineInformationCircle/><a onClick={() => navigate("/Conocemas")}className={classes.abutton}> Sobre nosotros </a></li>


          </ul>
        </nav>


        <div className={classes["Button"]}>
          {
            !user ?
            <>
            <Ghost onClick={() => navigate("/auth/signup")} className={classes["Ghost"]} data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"> Sign up </Ghost>


          <Button onClick={() => navigate("/auth/signin")} className={classes["Ghost"]} data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"> Log in </Button>

            </>:
            <Button onClick={() => { logout() }}>
              Sign out
            </Button>
          }

        </div>

      </header>

    </section>

  );
}

export default Header;