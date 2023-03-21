// ✍️ import the button's CSS module
import style from './button.module.css';
const Button = () => {
  // ✍️ set the button's className to the class from the CSS module
  return <button type="button" className={style.error} >Log in</button>
}

export default Button
