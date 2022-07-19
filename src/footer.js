import style from "./footer.module.css";
import fbico from "./icons/facebook.png";
import linkdico from "./icons/linkedin.png";
function footer() {
  return (
    <div>
      <div className={style.footer}>
        <div>
          <a href="https://www.facebook.com/eeemons/">
            <img src={fbico} alt="facebook"></img>
          </a>
          <a href="https://www.linkedin.com/in/maksudul-haque-40984b184/">
            <img src={linkdico} alt="linkedin"></img>
          </a>
        </div>
        <p>Copyrights © Maksudul Haque</p>
      </div>
    </div>
  );
}
export default footer;
