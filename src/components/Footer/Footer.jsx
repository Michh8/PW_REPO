import classes from './Footer.module.scss';
import logo from '../../assets/main/logo-white.png';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className={classes.Footer} >
            
            <section className={classes.acontainer}>
                <a onClick={() => navigate("/Campañas")}  className={classes.abutton}>CAMPAÑAS</a>
                <a  onClick={() => navigate("/Organizaciones")}  className={classes.abutton}>ORGANIZACIONES</a>
                <a href="/Conocemas" className={classes.abutton}>SOBRE NOSOTROS</a>

                <p> ©lasolidaria 2022. Todos los derechos reservados </p>


            </section>
            <section className={classes.logocontainer}>
                <figure >
                    <img src={logo} alt="Logo" />
                </figure>

            </section>

        </footer>
    );
}

export default Footer;