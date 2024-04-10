import logo from './logo.svg';
import './App.css';

const element = <h1>Say hello to <br/>Reactjs</h1>;
const para = <p>You will learn a Frontend <br/> framework from scrach, to<br/> become a Ninka Developer</p>;
const button = <button id="awesome">Awesome !</button>;
const box1 = <div className='box1'>
              <img src='https://imgur.com/H2L3ohY.png' alt='icon-1'/>
              <h3>Declerative</h3>
              <p>React make it painless to create interctive UI's </p>
            </div>
const box2 = <div className='box1'>
              <img src='https://imgur.com/IHW1mFB.png' alt='icon-1'/>
              <h3>Components</h3>
              <p>Build encapsulated components that manage their states. </p>
            </div>
const box3 = <div className='box1'>
              <img src='https://imgur.com/LtUDB9y.png' alt='icon-1'/>
              <h3>Single-Way</h3>
              <p>A set of imutable values are passed to the component's. </p>
            </div>
const box4 = <div className='box1'>
              <img src='https://imgur.com/agN6R4Y.png' alt='icon-1'/>
              <h3>JSX</h3>
              <p>Statically-typed, designed to run on mordern browsers. </p>
            </div>
const footer = <div className='box'>{box1}{box2}{box3}{box4}</div>;
function App() {
  return ( 
  <div className="App">
    <div className="hero">
      <div className='left'>
        {element}
        {para}
        {button}
      </div> 
      <div className="logo">
        <div className='main-logo'>
          <div className='logo1'>
            <img src={logo} alt="React Logo" />
          </div>
          <div className='logo1'>
            <img src={logo} alt="React Logo" />
          </div>
        </div>
        <div className='small-logo'>
          <div className='logo1'>
            <img src={logo} alt="React Logo" />
          </div>
          <div className='logo1'>
            <img src={logo} alt="React Logo" />
          </div>
        </div>
      </div>
    </div>
    <div className='footer'>
      {footer}
    </div>
  </div>
            );
}

export default App;
