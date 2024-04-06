import "./Rain.scss";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";

const Rain = () => {
  return (
    <div className="Rain">
      <img className="img img--1" src={img1} alt="" />
      <img className="img img--2" src={img2} alt="" />
      <img className="img img--3" src={img3} alt="" />
      <img className="img img--4" src={img4} alt="" />
      <img className="img img--5" src={img5} alt="" />
      <img className="img img--6" src={img6} alt="" />
    </div>
  );
};

export default Rain;
