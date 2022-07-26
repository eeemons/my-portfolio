import style from "./homePage.module.css";
import Navbar from "./navbar";
import UserDummy from "./icons/Designer.jpg";

function homePage() {
  return (
    <div className={style.container}>
      <Navbar></Navbar>
      <div className={style.mainContent}>
        <div className={style.column}>
          <section>
            <div className={style.hello}>
              <p className={style.greetings}>Hello I am!</p>
              <button>Web Developer</button>
            </div>
            <p className={style.greetings}>Maksudul Haque</p>
          </section>

          <section>
            <div className={style.moto}>
              <p>
                I design website and make it real. I am passionate and hard
                worker.
              </p>
            </div>
          </section>

          <section className={style.btnGroup}>
            <button className={style.btnHire}>Hire Me</button>
            <button className={style.btnProject}>Projects &#x2197;</button>
          </section>

          <section className={style.clientSection}>
            <p className={style.number}>84+</p>
            <p className={style.clientSectionPara}>
              Clients on work world wide
            </p>
          </section>

          <section className={style.contact}>
            <div className={style.clientNumber}>
              <p className={style.number}>572</p>
              <p className={style.clientSectionPara}>Projects Done</p>
            </div>
            <div className={style.mail}>
              <p>Contact</p>
              <p>eeemons@live.com</p>
              <p>01684683581</p>
            </div>
          </section>

          <section className={style.footer}>
            <div className={style.footerColumn}>
              <p>Project</p>
              <p>Statistics 2022</p>
              <button>Know More</button>
            </div>
            <div className={style.footerColumn}>
              <ul>
                <li>Website Design</li>
                <li>Mobile App Design</li>
                <li>Brand Identity</li>
              </ul>
            </div>
          </section>
        </div>
        <div className={style.column}>
          <img src={UserDummy} alt="The user that created the website" />
        </div>
      </div>
    </div>
  );
}
export default homePage;
