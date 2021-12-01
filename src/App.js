import { css } from "@emotion/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";

AOS.init();

const override = css`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  margin: 0 auto;
  width:100%;
`;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    {loading ?
        <SyncLoader color={'#EB9A85'} loading={loading} size={30} css={override} />
        :
        <div className="App">
          <Header data={resumeData.main}/>
          <About data={resumeData.main}/>
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </div>

      }
    </>
   
  );
};

export default App;
