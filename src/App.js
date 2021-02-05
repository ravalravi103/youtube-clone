import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Recommended from './component/Recommended/Recommended';

function App() {
  return (
    <div className="App">
        <Header />
         <div className="body">
            <Sidebar/>
            <Recommended />
         </div>
    </div>
  );
}

export default App;
