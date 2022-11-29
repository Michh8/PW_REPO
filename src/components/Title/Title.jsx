import classes from './Title.module.scss';

const Title = ({ children, className, ...rest }) => {
  return (
    <button className={`${classes["Title"]} `} >
      {/* Texto o contenido del botón */}
      {children}
    </button>
  )
}

export default Title;