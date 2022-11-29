import { useState } from 'react';
import { toast } from 'react-toastify';

import Button from '../Button/Button';
import classes from '../Signin/Signin.module.scss';
import quote from '../../assets/main/signin.png';

const Signin = ({ onLogin = () => { } }) => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const errors = {
        "identifier": !identifier,
        "password": !password,
    }

    const hasErrors = () => Object.values(errors).some(error => error);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (hasErrors()) {
            toast.warn("Wrong fields");
            return;
        }

        onLogin(identifier, password);
    }

    return (
        <section className={classes.sign}>
            <section>

                <figure >
                    <img className={classes.ima} src={quote} alt="frase" />
                </figure>
            </section>
            <form >
                <div className={classes.form}>

                    <div className={classes.grupo} >
                        <label>User</label>

                        <input className={errors["identifier"] ? classes["error"] : ""}
                            type={"text"}
                            name="identifier"
                            autoComplete='username'
                            value={identifier}
                            onChange={({ target }) => { setIdentifier(target.value) }} /><span className={classes.barra}></span>
                    </div>

                    <div className={classes.grupo} >
                        <label>Contraseña</label>

                        <input className={errors["password"] ? classes["error"] : ""}
                            type={"password"}
                            name="password"
                            autoComplete='current-password'
                            value={password}
                            onChange={({ target }) => { setPassword(target.value) }} /><span className={classes.barra}></span>
                    </div>
                    <Button className={classes.bu} type="submit" disabled={hasErrors()}>INGRESAR</Button>
                </div>


            </form>
        </section>



    );
}

export default Signin;