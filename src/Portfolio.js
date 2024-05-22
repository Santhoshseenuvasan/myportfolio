import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Myprojects from "./components/Myprojects";
import Resume from "./components/Resume";





function Portfolio(){
    return(
        <div className="App">
        
        <Header/>
        <Hero/>
        <About/>
        <Myprojects/>
        <Resume/>
        <Contact/>
        <Footer/>
        
     
        </div>
    )
}
export default Portfolio;