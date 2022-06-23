import style from "./education.module.css";
function education() {
  return (
    <div>
      <div className={style.education}>
        <h2>Education</h2>
        <div>
          <h3>American International University Bangladesh</h3>
          <p>Bsc, CSE</p>
          <p>2018 - 2022</p>
        </div>
        <div>
          <h3>Banophool Adibashi GreenHeart College</h3>
          <p>HSC</p>
          <p>2015 - 2017</p>
        </div>
        <div>
          <h3>Pallabi Majedul Islam Model High School</h3>
          <p>SSC</p>
          <p>2013 - 2015</p>
        </div>
      </div>
    </div>
  );
}
export default education;
