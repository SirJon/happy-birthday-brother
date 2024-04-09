import "./Rain.scss";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import { getRandomNumber } from "../../utils";

const Rain = () => {
  const imgs = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="Rain">
      {new Array(50).fill(null).map((it, i) => {
        const left = getRandomNumber(0, 120);
        const width = getRandomNumber(30, 70);
        const animationDelay = getRandomNumber(1, 14);
        const animationDuration = getRandomNumber(5, 10);
        const img = imgs[getRandomNumber(0, imgs.length - 1)];
        return (
          <img
            className="img"
            key={i}
            src={img}
            style={{
              left: `${left}vw`,
              width: `${width}px`,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Rain;
