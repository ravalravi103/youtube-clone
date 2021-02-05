import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import RecommendedList from './component/Recommended/RecommendedList';

function App() {
  return (
    <div className="App">
        <Header />
         <div className="body">
            <Sidebar/>
            <RecommendedList />
         </div>
    </div>
  );
}

export default App;
