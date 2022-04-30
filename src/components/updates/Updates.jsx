import { UpdatesData } from '../../data/Data';
import './updates.css';

function Updates() {
  return (
    <div className='updates'>
      {UpdatesData.map((update) => {
        return (
          <div className='update' key={update.img}>
            <img src={update.img} alt='' />
            <div className='notification'>
              <div style={{ marginBottom: '0.5rem' }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Updates;
