import Button from '../../Button/Button';
import classes from './NewPostForm.module.scss';
import camp from '../../../assets/main/camp.png';

const NewPostForm = ({ onAddPost = () => { } }) => {

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    //Ejecutar el insert al server
    onAddPost(data.get("title"), data.get("description"), data.get("image"));
  }

  return (
    <section className={classes["post-form-section"]}>
      <h3> ¡REALIZA UNA CAMPAÑA! 😊 </h3>
<figure>
  <img src={camp} alt="" />
</figure>
      <form onSubmit={onSubmitHandler}>
        <label>
          Ingresa el titulo de la campaña: *
          <input name="title" />
        </label>

        <label>
          Agrega una descripcion acorde:  *
          <textarea name="description" rows={5} />
        </label>

        <label>
          Ingresa una imagen : *
          <input name="image" type="url" />
        </label>

        <Button type="submit">
          AGREGAR CAMPAÑA
        </Button>
      </form>
    </section>
  );
}

export default NewPostForm;