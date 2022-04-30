import Cards from '../cards/Cards';
import Table from '../table/Table';
import './mainDash.css';

function MainDash() {
  return (
    <div className='mainDash'>
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
}

export default MainDash;
