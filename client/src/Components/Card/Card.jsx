import style from './Card.module.css';
import { Link } from 'react-router-dom';


const Card = ({name, flagsImage, continent, id}) => {
    

    return(
    <Link to={`/details/${id}`}>
    <div className={style.cardContainer}>
      <img src={flagsImage} alt={name} className={style.cardImage} />
      <div className={style.cardInfo}>
        <h5 className={style.cardName}>{name}</h5>
        <p className={style.cardContinent}>{continent}</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;

