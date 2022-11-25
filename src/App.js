import logo from './logo.svg';
import './App.css';
import {
    Link,
    BrowserRouter as Router,
    // Router,
    Route, Routes
} from "react-router-dom";
import ListFile from "./pages/ListFile";
import Start from "./pages/Start";


function App() {
    return (

        <Router>
            <div>
                <ul>
                    {/*hint_create_button*/}
                    {/*hint_open_new_page*/}
                    <Link to="/list-file">
                        <button style={{marginBottom:"20px"}}>
                            Go to List Page
                        </button>
                    </Link>
                    <br/>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list-file">List Page</Link>
                    </li>
                </ul>
                <hr/>
            </div>
            <Routes>
                <Route exact path="/" element={<Start/>}/>
                <Route exact path="/list-file" element={<ListFile/>}/>
            </Routes>
        </Router>

    );

}

export default App;
