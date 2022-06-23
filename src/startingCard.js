import style from "./startingCard.module.css";
import cssIcon from "./icons/css.png";
import htmlIcon from "./icons/html.png";
import vueIcon from "./icons/vue.png";
import reactIcon from "./icons/react.png";
function startingCard() {
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <div className={style.content}>
          <h1>Maksudul Haque</h1>
          <h3>
            A frontend web developer, recently graduated from American
            International University. Eager to learn and making new things
            happen through technology. Making innovative ideas and bringing them
            alive is my priority.
          </h3>
          <h4>My skills </h4>
          <div className={style.skill}>
            <img src={cssIcon} alt="css"></img>
            <img src={htmlIcon} alt="html"></img>
            <img src={vueIcon} alt="vue"></img>
            <img src={reactIcon} alt="react"></img>
          </div>
          <br></br>
          <a href="https://www.facebook.com/eeemons">Learn more</a>
        </div>
        <div className={style.flap}></div>
      </div>
    </div>
  );
}
export default startingCard;
