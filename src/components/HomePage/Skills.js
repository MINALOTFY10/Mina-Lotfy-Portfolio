import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import reactjsImg from "../../assets/img/reactjs.svg"
import reduxImg from "../../assets/img/redux-svgrepo-com.svg"
import reactrouterImg from "../../assets/img/react-router-svgrepo-com.svg"
import bootstrapImg from "../../assets/img/Bootstrap.png"
import firebaseImg from "../../assets/img/firebase-svgrepo-com.svg"
import githubImg from "../../assets/img/github.svg"
import visualstudioImg from "../../assets/img/visual-studio-code-svgrepo-com.svg"
import flutterImg from "../../assets/img/flutter-svgrepo-com.svg"
import cplusplusImg from "../../assets/img/cplusplus.svg"
import javaImg from "../../assets/img/java.svg"
import pyhtonImg from "../../assets/img/icons8-python.svg"
import sqlImg from "../../assets/img/sqlite.svg"
import oopImg from "../../assets/img/oop.png"
import datastructureImg from "../../assets/img/datastructure.png"
import machineImg from "../../assets/img/machinelearning.png"
import algoImg from "../../assets/img/algorithms.png"


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactjsImg} alt="ReactJS" className="p-1"/>
                                <h5>React JS</h5>
                                <img src={reduxImg} alt="Redux" className="p-1" style={{marginTop:"8px"}}/>
                                <h5>Advanced Redux</h5>
                            </div>
                            <div className="item">
                                <img src={reactrouterImg} alt="Image" />
                                <h5>React Router</h5>
                                <img src={bootstrapImg} alt="Image" style={{marginTop:"24px"}} />
                                <h5>Bootstrap</h5>
                            </div>
                  
                            <div className="item">
                                <img src={firebaseImg} alt="Image" />
                                <h5>Firebase</h5>
                                <img src={githubImg} alt="Image" className="p-2 mt-2"/>
                                <h5>Github</h5>
                            </div>
                   
                            <div className="item">
                                <img src={visualstudioImg} alt="Image" className="p-3"/>
                                <h5>Visual Studio</h5>
                                <img src={flutterImg} alt="Image" className="p-2 mt-2"/>
                                <h5>Flutter</h5>
                            </div>
                    
                            <div className="item">
                                <img src={cplusplusImg} alt="Image" className="p-2"/>
                                <h5>C++</h5>
                                <img src={javaImg} alt="Image" className="p-2 mt-2"/>
                                <h5>Java</h5>
                            </div>

                            <div className="item">
                                <img src={pyhtonImg} alt="Image" className="p-2"/>
                                <h5>Pyhton</h5>
                                <img src={sqlImg} alt="Image" className="p-2 mt-2"/>
                                <h5>SQLite</h5>
                            </div>

                            <div className="item">
                                <img src={oopImg} alt="Image" className="pb-3"/>
                                <h5>object oriented programming</h5>
                                <img src={datastructureImg} alt="Image" className="p-2 mt-2"/>
                                <h5>Data Structure</h5>
                            </div>

                            <div className="item">
                                <img src={algoImg} alt="Image" className="p-2"/>
                                <h5>Analysis and Design of Algorithms</h5>
                                <img src={machineImg} alt="Image" className="p-2 mt-2"/>
                                <h5>Machine Learning</h5>
                            </div>
                
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills