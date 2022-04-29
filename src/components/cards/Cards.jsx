import { CardsData } from '../../data/Data';
import Card from '../card/Card';
import './cards.css';

function Cards() {
  return (
    <div className='cards'>
      {CardsData.map((card, id) => {
        return (
          <div className='parentContainer' key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
