import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

const Resume = ({ data }) => {
  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.university} data-aos="zoom-out-left" data-aos-duration="1500">
          <h3>{education.university}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
  }

    const techStack = [
      {
        name: "HTML5",
        img: "https://i.postimg.cc/vHgyvkmq/html5-logo-vector-free-download-11574222422da5narngo7.png",
      },
      {
        name: "CSS3",
        img: "https://i.postimg.cc/wvQMgPNc/image.png",
      },
      {
        name: "Bootstrap",
        img: "https://i.postimg.cc/PxrKMGdP/bootstrap-logo.png",
      },
      {
        name: "Tailwind CSS",
        img: "https://i.postimg.cc/25St8Lgq/download.png",
      },
      {
        name: "Material UI",
        img: "https://i.postimg.cc/nLzfCPNG/logo.png",
      },
      {
        name: "JavaScript",
        img: "https://i.postimg.cc/YCxRWyMj/js.png",
      },
      {
        name: "React JS",
        img: "https://i.postimg.cc/k51yj6Vm/react.png",
      },
      {
        name: "Node JS",
        img: "https://i.postimg.cc/W1VStPRQ/node.png",
      },
      {
        name: "Express JS",
        img: "https://i.postimg.cc/6QDnyDTk/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },
      {
        name: "MongoDB",
        img: "https://i.postimg.cc/Cx1CRCLV/db.png",
      },
      {
        name: "Python",
        img: "https://i.postimg.cc/4yTck10p/python-7be70baaac.png",
      },
      {
        name: "Netlify",
        img: "https://i.postimg.cc/4NVBJx06/netlify.png",
      },
      {
        name: "Firebase",
        img: "https://i.postimg.cc/FRRgLjxS/firebase-logo.png",
      },
      {
        name: "Github",
        img: "https://i.postimg.cc/qq854jvr/25231.png", 
      },
      {
        name: "REST API",
        img: "https://i.postimg.cc/5NKwj8QW/png-clipart-application-programming-interface-logo-computer-programming-api-icon-text-logo.png", 
      },
      {
        name: "Heroku",
        img: "https://i.postimg.cc/B6Z6xwRY/heroku-logotype-vertical-purple.png", 
      }
    ];

    

  return (
    <section id="resume" className="py-14">
      <div className="row education">
        <div className="three columns header-col">
          <h1 data-aos="zoom-out-right" data-aos-duration="1500">
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col bg-white p-12 box-border rounded-xl shadow-xl">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row skill ">
        <div className="three columns header-col">
          <h1 data-aos="zoom-out-right" data-aos-duration="1500">
            <span>Skills</span>
          </h1>
        </div>        
      </div>
      {/* Skill Part */}
      <Slide right>
        {/* tech header */}
        <div className="max-w-6xl mx-auto">
          <h1 className="font-light border-b-2 pb-3 mb-8 leading-3">
            <span className="ml-2 lg:text-6xl text-xl ">
              Tech Stacks I'm familiar with
            </span>
            <br />{" "}
          </h1>
        </div>
      </Slide>
      <Bounce left>
        {/* tech stack */}
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:max-w-6xl mx-auto max-w-4xl lg:gap-y-8">
          {techStack.map((tech, i) => {
            return (
              <div
                className="flex justify-start items-center transition-all hover:bg-gray-100 p-4"
                key={i}
              >
                <img className="w-10 h-10 mr-4" src={tech.img} alt="" />
                <h4>{tech.name}</h4>
              </div>
            );
          })}
        </div>
      </Bounce>
    </section>
  );
};

export default Resume;
