import { useState } from 'react';
import { toast } from 'react-toastify';

import Button from '../../Button/Button'; //este lo cambio ,,
//import classes from '../Signin/Signin.module.scss'; //este se queda igual pero cambiar el name
import classes from './../AuthForm.module.scss';

import quote from '../../../assets/main/register.png';// este lo cambio ,,


const Signin = ({ onRegister = () => { } }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const errors = {
        "username": !username || username.length < 4 || username.length > 32,
        "email": !email,
        "password": !password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/.test(password),
       
    }

    const hasErrors = () => Object.values(errors).some(error => error);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (hasErrors()) {
            toast.warn("Wrong fields!");
            return;
        }

        onRegister(username, email, password);
    }


    return (

        <section className={classes.sign}>


            <section>

                <figure >
                    <img className={classes.ima} src={quote} alt="frase" />
                </figure>
            </section>

            <section className={classes.cont}>
                <form onSubmit={onSubmitHandler} >
                    <div className={classes.form}>
                        <h1>Información general 👾</h1>
                        <div className={classes.grupo} >
                            <label>Nombre de la organización: </label>

                            <input
                                className={errors["username"] ? classes["error"] : ""}
                                type={"text"}
                                placeholder="e.g. supernick33"
                                autoComplete="username"
                                name="username"
                                value={username}
                                onChange={({ target }) => { setUsername(target.value) }} />
                            <span className={classes.barra}></span>
                        </div>

                                    {
                                    /*
                                    <div className={classes.grupo} >
                                        <label>Fecha de fundación: </label>

                                        <input type="date" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Categoria: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Dirección: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Telefono: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>

                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Email</label>

                                        <input type="email" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    ///////////////////////////////////////////////////////////idk
                                    <div className={classes.grupo} >
                                <input type="email" name="" id="" required /><span className={classes.barra}></span>
                                <label>Email</label>
                            </div>
                            <div className={classes.grupo} >
                                <input type="number" name="" id="" required /><span className={classes.barra}></span>
                                <label>Edad</label>
                            </div>
                            <div className={classes.grupo} >
                                <textarea name="" id="" rows="3" required></textarea><span className={classes.barra}></span>
                                <label>Mensaje</label>
                            </div> 
                            ////////////////////////////////////////////////////////////////////////////////////
                            <h1>Información del representante</h1>
                                    <div className={classes.grupo} >
                                        <label>Nombre del representante: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Nombre del representante: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Fecha de nacimiento: </label>

                                        <input type="date" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Número de DUI: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Dirección: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                                    <div className={classes.grupo} >
                                        <label>Telefono: </label>

                                        <input type="text" name="" id="" required /><span className={classes.barra}></span>
                                    </div>
                            */}

                        <div className={classes.grupo} >
                            <label>Email</label>

                            <input className={errors["email"] ? classes["error"] : ""}
                                type={"email"}
                                placeholder="e.g. example@example.com"
                                autoComplete="email"
                                name="email"
                                value={email}
                                onChange={({ target }) => { setEmail(target.value) }} /><span className={classes.barra}></span>
                        </div>

                        <div className={classes.grupo} >
                            <label>Contraseña</label>

                            <input
                                className={errors["password"] ? classes["error"] : ""}
                                type={"password"}
                                autoComplete="new-password"
                                placeholder="A strong password"
                                name="password"
                                value={password}
                                onChange={({ target }) => { setPassword(target.value) }} /><span className={classes.barra}></span>
                        </div>
                        <Button className={classes.bu} type="submit" disabled={hasErrors()}>Submit</Button>
                    </div>




                </form>

            </section>


        </section>



    );
}

export default Signin;