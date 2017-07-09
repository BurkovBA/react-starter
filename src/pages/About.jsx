import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


class About extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header/>
        <div> This is the main content </div>
        <Footer/>
      </div>
    );
  }
}

export default About
