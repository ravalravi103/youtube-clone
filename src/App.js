import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import RecommendedList from './component/Recommended/RecommendedList';
import TrandingList from './component/Pages/Tranding/TrandingList'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
     <Router>
        <div className="App">
            <Header />
            <div className="body">
               <Sidebar/>
                   <Switch>
                   <Route path="/tranding" component={TrandingList}/>
                   <Route path="/" exact component={RecommendedList}/>
                   </Switch>
                    
            </div>
        </div>
    </Router>
  );
}

export default App;
