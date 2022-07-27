import style from "./navbar.module.css";
function Navbar() {
  return (
    <div className={style.container}>
      <section className={style.navName}>
        <h2 className={style.name}>Maksudul Haque</h2>
        <h2 className={style.dot}>.</h2>
      </section>
      <div className={style.links}>
        <a href="/">Home</a>
        <a href="/">Education</a>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Services</a>
      </div>

      <section>
        <button>Let's Chat</button>
      </section>
    </div>
  );
}

export default Navbar;
