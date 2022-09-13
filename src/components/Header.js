import "./Header.css";
import Me from "../images/me.jpg";
import d20 from "../images/d20.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="me">
        <img src={Me} className="picture" alt="me" />
      </div>
      <div className="about-me">
        <h5>
          My name is Gustavo Fontana Vieira. 
I'm 18 years old, a brazilian high school student and Developer System Technician by ETEC Antônio Furlan.
        </h5>
        <br />
        <h5>
          I have knowledge in JavaScript, TypeScript, NodeJS, NestJS,
          Sequelize, TypeORM and Express. JavaScript being my "main language".
        </h5>
        <br />
        <h5>
          I'm focusing my studies in front-end development and improving my knowledge in ReactJS and CSS.
        </h5>
        <div className="img-position">
          <img src={d20} className="d20" alt="d20" />
        </div>
      </div>
    </header>
  );
}
