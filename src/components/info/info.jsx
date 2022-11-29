import classes from './info.module.scss';
import quote from '../../assets/main/frase.png';
import Title from '../../components/Title/Title';

import descubre from '../../assets/main/descubre.png';

const info = () => {
    return (

        <div className={classes.info} >

            <figure >
                <img src={quote} alt="frase" />
            </figure>
            <figure  >
                <img className={classes.ima} src={descubre} alt="conoce" />
            </figure>
           

        </div>

    );
}

export default info;