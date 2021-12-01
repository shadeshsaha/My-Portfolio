import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const About = ({ data}) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var country = data.address.country;
    var phone = data.phone;
    var email = data.email;
    // var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about" style={{ background:"#f4f4fa"}}>
      <div className="row p-9">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Shadesh's Profile Pic"
            data-aos="zoom-out-right" data-aos-duration="1500"
          />
        </div>

        <div className="bg-white p-12 box-border rounded-xl shadow-xl nine columns main-col" data-aos="zoom-out-left" data-aos-duration="1500">
          <h1>
            <span>About Me</span>
          </h1>

          <p className="text-justify my-6">{bio}</p>
          <div className="row ">
            <div className="columns contact-details mt-6">
              <h1>
                <span>Contact Details</span>
              </h1>
              <p className="address my-6">
                <span>{name}</span>
                <br />
                <span>{email}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  {city} {state}, {country}
                </span>
              </p>
            </div>
            <div className="columns mt-6">
              <h1>
                <span>Connect with me</span>
              </h1>
              <div className="flex items-center space-x-4 justify-start lg:justify-end  mt-12">
                <a href="http://www.facebook.com/shadesh.saha.5" target="_blank" rel="noopener noreferrer"><BsFacebook className="text-gray-500 text-5xl hover:text-blue-500 transition duration-200" /></a>
                <a href="https://www.instagram.com/shadesh_saha/" target="_blank" rel="noopener noreferrer"><BsInstagram className="text-gray-500 text-5xl hover:text-red-500 transition duration-200" /></a>
                <a href="https://www.linkedin.com/in/shadesh-saha/" target="_blank" rel="noopener noreferrer"><BsLinkedin className="text-gray-500 text-5xl hover:text-blue-500 transition duration-200" /></a>
                <a href="https://github.com/shadeshsaha" target="_blank" rel="noopener noreferrer"><BsGithub className="text-gray-500 text-5xl hover:text-dark-500 transition duration-200" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
