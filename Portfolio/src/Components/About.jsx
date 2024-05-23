import React from 'react';
import AboutBackground from '../assets/AboutBackground/Aboutbackground.jpg'
const About = () => {
  return (
    <section
      id="about"
      className="p-8 bg-cover bg-center"
      style={{ 
        backgroundImage:`url(${AboutBackground})` 
      }} 
    >
      <div className="bg-white bg-opacity-89 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white-">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am currently pursuing MCA from Galgotias University and I am a skilled Frontend Developer with expertise in JavaScript, React, Next.js, HTML, CSS, and Tailwind CSS. I am committed to developing responsive and user-friendly web applications.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          My goal is to leverage my technical skills and industry knowledge to contribute to innovative projects and improve user experiences.
          I am currently developing an Amazon full-stack clone using Firebase and React, which is providing me with hands-on experience in full-stack development and deepening my understanding of backend services.
          Additionally, I have a strong foundation in core programming languages like Java, Python, and C++, which enhances my problem-solving abilities and coding practices.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          I am eager to join a dynamic team where I can further enhance my expertise, particularly in the MERN stack, and make a significant impact on both the organization and its users.
          My strong academic performance, with a CGPA of 9.45 in the first semester of my MCA, reflects my dedication and ability to excel in complex technical environments.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          In summary, I am passionate about staying updated with the latest industry trends and continuously improving my skill set.
          I am ready to bring my creativity, technical proficiency, and enthusiasm to a forward-thinking organization.
        </p>
      </div>
    </section>
  );
};

export default About;
