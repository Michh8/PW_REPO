import classes from './Card.module.scss';
import aboutus from '../../assets/main/aboutus.png';
import micro from '../../assets/main/micro.png';
import resumen from '../../assets/main/resumen.png';

const Card = () => {
    return (


        <section className={classes["Card"]} >
            <figure className={classes["ima"]}>
                <img src={resumen} alt="frase" />
            </figure>
            <section className={classes["Cards"]}>

                <article className={classes["space-card"]} >

                    <div>
                        <figure >
                            <img src={aboutus} alt="aboutus" />
                        </figure>
                        <h3> ORGANIZACION </h3>
                        <p>
                            Como organización, recibe donaciones y realiza campañas de crowdfunding para patrocinar actividades.
                        </p>

                    </div>


                </article>
                <article className={classes["space-card"]}>
                    <figure >
                        <img src={micro} alt="micro" />
                    </figure>
                    <h3> PARTICULAR </h3>
                    <p>
                        Como particular, envía donaciones y patrocina campañas de tu interés.
                    </p>

                </article>
            </section>

        </section>

    );
}

export default Card;

