import React,{Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
        return(
            <Router>
                <Header />
                <Home />
                <About />
                <Services />
                <Portofolio />
                <Team />
                <Contact />
                <Footer />
            </Router>
        )
    }
}

export default App;