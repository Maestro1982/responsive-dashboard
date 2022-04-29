import './App.css';
import MainDash from './components/mainDash/MainDash';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <div className='appGlass'>
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
