import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import QuoteSection from '../components/QuoteSections';
import ImageText from '../components/ImageText';
import IMG1 from '../assets/img2.png'
import IMG2 from '../assets/img2.png'
import IMG3 from '../assets/img2.png'
import IMG4 from '../assets/img2.png'
import Footer from '../components/Footer';

function Home() {
    return (
      <div>
        <Header/>
        <Banner/>
        <QuoteSection/>
        <ImageText images = {[
          {src: IMG1 , alt:"Descrição da img1" , text:"Aqui vai o texto" },
          {src: IMG2 , alt:"Descrição da img2" , text:"Aqui vai o texto" },
          {src: IMG3 , alt:"Descrição da img3" , text:"Aqui vai o texto" },
          {src: IMG4 , alt:"Descrição da img4" , text:"Aqui vai o texto" },
        ]}/>
      <Footer/>
      </div>
    );
  }
  
  export default Home;
