import React from 'react';
import './App.css'; 
import pic from './1.png';

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="header__logo">
            <img className="header__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3P_Pbk544C4K21UH3i6loMUtaRq0TEw7OJA&s" alt="logo" />
            <h1 className="header__title">Citizen & Constituion</h1>
          </div>
   
          <div className="header__menu">
            <nav id="navbar" className="header__nav collapse">
              <ul className="header__elenco">
                <li className="header__el"><a href="#" className="header__link">Home</a></li>
                <li className="header__el"><a href="#" className="header__link">About</a></li>
                <li className="header__el"><a href="#" className="header__link">Articles</a></li>
                <li className="header__el"><a href="#" className="header__link">Case Studies</a></li>
                <li className="header__el"><a href="#" className="header__link">Ask a Question</a></li>
                <li className="header__el header__el--blue"><a href="#" className="btn btn--white">Sign In →</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="sect sect--padding-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site">
                <h1 className="site__title">Explore the Constitution of India</h1>
                <h2 className="site__subtitle">Your comprehensive guide to understanding India’s foundational document</h2>
                <div className="site__box-link">
                <a className="btn btn--width" href="doc.html">Start learning</a>
                </div>
                <img className="site__img" src={pic} alt="Business Growth" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sect sect--padding-bottom">
        <div className="container">
          <div className="row row--center">
            <h1 className="row__title">We aim to provide a comprehensive and accessible
               resource for understanding The Constituion of India.
                From easy explanations of complex documents, scenario based examples, 
                to quizzes and case studies, we offer tools and insights to 
                help you grasp the significance and implications of the 
                Constitution. Whether you're a student, researcher, or
                simply curious about Indian law, you'll find valuable 
                information and resources here </h1>
            <h2 className="row__sub"></h2>
          </div>
          <div className="row row--center row--margin">
            <div className="col-md-4 col-sm-4 price-box price-box--purple">
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Comprises of Preamble</h1>
         
                
                
                <p className="price-box__feat">The Preamble serves as an 
                  introductory statement 
                  that outlines the fundamental values and 
                  guiding principles of the Constitution.</p>
                <div className="price-box__btn">
                  <a className="btn btn--purple btn--width" href="#">Start Learning</a>
                </div>
              </div>
              
            </div>
            <div className="col-md-4 col-sm-4 price-box price-box--violet">
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Fundamental Rights</h1>
               
                <p className="price-box__feat">Fundamental Rights are essential rights guaranteed to all citizens to ensure individual freedom and equality.</p>
               
                <div className="price-box__btn">
                  <a className="btn btn--violet btn--width" href="#">Start Learning</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 price-box price-box--blue">
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Directive Principles of State Policy </h1>
               
                
                <p className="price-box__feat">Directive Principles are guidelines for the 
                  State to follow in order to ensure a just and equitable society. 
                  Though not justiciable, they are fundamental in the governance of the country.</p>
              
                <div className="price-box__btn">
                  <a className="btn btn--blue btn--width" href="#">Start Learning</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 price-box price-box--violett">
              <div className="price-box__wrap">
                <div className="price-box__img"></div>
                <h1 className="price-box__title">Fundamental Duties </h1>
               
                
                <p className="price-box__feat"> Fundamental Duties are moral obligations for 
                  citizens to help promote a sense of discipline and commitment towards the nation.</p>
              
                <div className="price-box__btn">
                  <a className="btn btn--blue btn--width" href="#">Start Learning</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="footer__text">© 2024 All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;