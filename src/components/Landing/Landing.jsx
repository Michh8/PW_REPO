import classes from './landing.module.scss';
import solidarizate from '../../assets/main/solidarizate.png';
import Ghost from '../Ghost/Ghost';
import intro from '../../assets/main/intro.png';

const Landing = () => {
    return (

        <section className={classes.Landing}>

            <section className={classes.acontainer}>
                <figure >
                    <img src={solidarizate} alt="solidarizate" />
                </figure>
                <div className={classes["Button"]}>
                    <Ghost href="/Conocemas"className={classes["Ghost"]}> CONOCE MÁS </Ghost>
                </div>

            </section>
     

        </section>

    );
}

export default Landing;