import CustomerReview from '../customerReview/CustomerReview';
import Updates from '../updates/Updates';
import './rightSide.css';

function RightSide() {
  return (
    <div className='rightSide'>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
}

export default RightSide;
