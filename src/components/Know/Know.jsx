import quote from '../../assets/main/frase.png';
import Title from '../../components/Title/Title';
import classes from './Know.module.scss';

import conoce from '../../assets/main/conoce.png';

const info = () => {
    return (

        <div className={classes.know} >

            <figure >
                <img src={conoce} alt="conoce" />
            </figure>
           
           

        </div>

    );
}

export default info;