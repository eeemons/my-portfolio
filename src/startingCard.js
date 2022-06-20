import style from "./startingCard.module.css";
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
          <a href="https://www.facebook.com/eeemons">Learn more</a>
        </div>
        <div className={style.flap}></div>
      </div>
    </div>
  );
}
export default startingCard;
