import './App.css';
import {Layout} from "./layout/Layout";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Gallery} from "./components/Gallery";

function App() {
    return (
        <div className="App">
            <Header/>
            <Layout/>
            <div className="container">
                    <Gallery/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
