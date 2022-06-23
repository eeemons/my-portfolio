import Education from "./education";
import Footer from "./footer";
import style from "./homePage.module.css";

function homePage() {
  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <h1>Maksudul Haque</h1>
        <article>
          Looking to make a name for myself, excelling at my work as a frontend
          developer. Being a world class frontend developer is my ambition and I
          would like to achieve the goal as soon as possible.
        </article>
        <Education />
        <Footer />
      </div>
    </div>
  );
}
export default homePage;
