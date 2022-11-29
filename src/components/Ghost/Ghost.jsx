import classes from './Ghost.module.scss';



const Ghost = ({ children, className, ...rest }) => {
  return (
    <a href="#" className={`${classes["Ghost"]} ${className ?? ""}`} {...rest}>
      {/* Texto o contenido del botón */}
      {children}
    </a>
  )
}

export default Ghost;

