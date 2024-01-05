// Example usage in another component or page

import React from 'react';
import CellInfo from '../component/CellInfo';
import CompanyInfo from '../component/CompanyInfo';
import Header from '../component/Header';
import BottomView from '../component/BottomView';

const MyPage = () => {
  const dataArray = [
    {
      title: "IT Cell",
      objective: "The IT Cell of the Department of Holistic Education strives to be a one-stop solution for all IT-related needs of Vidya Bharati and the Sangh Parivar.",
      footnote: "This initiative promotes digital literacy and connectivity."
    },
    {
        title: "Event Management Cell",
        objective:"The Event Management Cell is dedicated to designing education-related events of national and international fame, aiming to establish Vidya Bharti's leadership in this dynamic field.",
        footnote:" Cultivating managerial skills and a sense of cultural pride along with opportunities to start starups."
    },
    {
        title: " Super 100",
        objective:"Super 100 is driven by the primary objective of establishing Vidya Bharti's dominance in the education sector, providing a platform for the free preparation of competitive exams across the country. Additionally, it aims to position India as a global leader in education through Vidya Bharti, offering culture-based education to the world using science and technology in this era of globalization.",
        footnote:"Bridging local talent to national aspirations"
    },
    {
        title: "IPR Cell",
        objective:"The IPR Cell is committed to establishing India as a leader in Intellectual Property Rights by fostering a culture of IPR in 15 lakh schools across the nation.",
        footnote:"Building a culture of respect for intellectual property."
    },
    {
        title: "Industry Co-ordination Cell",
        objective:"The Industry Coordination Cell envisions making school education skillful by forging partnerships with companies and startups across the country affiliated with Vidya Bharti.",
        footnote:" Nurturing global perspectives and cross-cultural understanding."
    }, {
        title: "HEI Coordination Cell",
        objective:"The HEI Coordination Cell is dedicated to enhancing mutual coordination between higher education institutions and schools, working towards the complementary development of both.",
        footnote:"Facilitating a smooth educational journey beyond schools."
    }, {
        title: "E-Commerce Cell",
        objective:"The E-Commerce Sale cell aims to make the products and services generated from skill, startup, and entrepreneurship projects within schools accessible to the public. Additionally, the goal is to transform all schools in the country into laboratories and entrepreneurship centers.",
        footnote:"Empowering students with entrepreneurial skills."
    }, {
        title: "TMS Cell",
        objective:"The TMS (Teaching and Non-Teaching Staff Management) Cell is dedicated to bringing excellent teaching and non-teaching staff into schools, ensuring quality education and administration.",
        footnote:" Prioritizing progressive learning for every student."
    }, {
        title: "Udyam Cell",
        objective:"The Udyam Cell fosters a spirit of innovation and enterprise, encouraging students to develop and implement their business ideas.",
        footnote:"Cultivating a culture of self-reliance and creativity for making Bharat a developed nation."
    }, {
        title: " Foreign Language Cell",
        objective:"The Foreign Language Cell is dedicated to developing foreign language skills in schools, providing students with the tools to excel in global environments and establishing coordination for those planning to study abroad.",
        footnote:"Broadening horizons through linguistic diversity."
    }, {
        title: "Olympiad Cell",
        objective:"The Olympiad cell aims to create a comprehensive test and platform at the national and international levels, strengthening Vidya Bharti's presence and establishing dominance in the education segment.",
        footnote:"Excelling beyond boundaries in the pursuit of knowledge"
    }, {
        title: "LMS Cell",
        objective:"The Learning Management System Cell envisions making LMS an integral part of school education, providing financially viable services to thousands of schools in Vidya Bharti. The goal is to develop services in segments like gamification, AI, ML, AR/VR, etc., making them accessible to the entire Vidya Bharti at an affordable rate.",
        footnote:" Enhancing accessibility and flexibility in education"
    }, {
        title: "CSR Cell",
        objective:"The CSR Cell plays a pivotal role in securing essential funding for educational initiatives. Its primary objective is to accomplish necessary projects for schools through CSR and develop new activities for school education.",
        footnote:" Integrating compassion and social awareness."
    }, {
        title: "R&D Cell",
        objective:"The Research and Development (R&D) Cell is dedicated to promoting research in school education. It focuses on exploring and developing products like Edtech, AR/VR, AI, LMS, TMS, Paper Recycling, Plastic Recycling, Cloth Recycling, Herbal Garden, FMCG, Technology, etc., within schools.",
        footnote:"Driving educational excellence through continuous innovation."
    }, {
        title: "Art Cell",
        objective:"The Art Sale Cell is dedicated to exploring new avenues of skills and startups within schools, specifically in the field of arts. Its primary objective is to develop innovative initiatives and opportunities in the realm of arts.",
        footnote:"Cultivating artistic expression and cultural appreciation"
    }, {
        title: " ATL Cell",
        objective:"The Atal Tinkering Lab (ATL) Cell aims to make optimal use of and operate the laboratories established in schools through the Atal Innovation Mission of the Government of India. It is committed to fostering innovation and scientific spirit among students.",
        footnote:" Fostering a culture of scientific exploration."
    }, {
        title: "Publications and Promotions Cell",
        objective:"Inclusive education, the cornerstone of our vision, transcends traditional boundaries. It embodies the essence of equality and empowerment, ensuring a collective learning experience for all. ",
        footnote:"Showcasing and celebrating academic achievements."
    }, {
        title: "Environment Cell",
        objective:"The Environment Cell stands as a bastion of environmental consciousness, committed to sensitizing, creating awareness, and educating students on the critical need for the preservation and conservation of our precious natural resources. At the heart of our mission is the cultivation of love and respect for nature among students. Through a myriad of activities, we aim to instill a deep understanding of the importance of protecting the environment.",
        footnote:" Nurturing environmental stewardship among students."
    },  {
        title: "Parenting Cell",
        objective:"The Parenting Cell conducts programs that bridge the gap between school and home, fostering collaborative efforts between parents and educators for the holistic development of students.",
        footnote:"Parenting Cell"
    }, {
        title: " Astrology Cell",
        objective:" Vidya Bharti embraces a unique approach to holistic growth with the Astrology Cell, unlocking cosmic insights to guide students on a journey of self-discovery.",
        footnote:"Nurturing minds through the cosmic lens."
    },
    {
        title: "Premium School Cell",
        objective:"The Premium School Cell aspires to set new benchmarks for excellence in education, establishing a framework for schools that define the epitome of educational standards.",
        footnote:"Shaping the future through excellence in education."
    }, {
        title: " Health Wisdom Cell",
        objective:"The Health Wisdom Cell researches and integrates vital health education into curriculum, fostering well-being and a holistic approach to student life.",
        footnote:"Nurturing healthy minds for a prosperous future."
    },
    {
        title: "Sports Cell",
        objective:" The Sports Cell at DHE champions a comprehensive sports program by integrating ancient games and researching new horizons in sports to nurture excellence in sports and holistic development among students.",
        footnote:"Building champions on and off the field."
    },{
        title: "Spiritual Cell",
        objective:"The Spiritual Cell integrates profound spiritual education into the curriculum, fostering holistic growth and character development among students.",
        footnote:"Nurturing souls for a balanced and purposeful life."
    },
    {
        title: "Grievance Redressal Cell",
        objective:"Vidya Bharti is committed to ensuring a supportive environment for all. The Grievance Redressal Cell stands as a pillar to carry out research in the field of grievance redressal to smoothly address concerns and fostering a secure atmosphere for all stakeholders.",
        footnote:"Building trust through effective grievance resolution."
    },
    // Add more data objects if needed
  ];

  return (
    <div className='bg-white'>
      <CompanyInfo />
      <Header />
      <p className='text-center text-2xl font-bold p-4 text-black'> Cells</p>
      {dataArray.map((data, index) => (
        <CellInfo
          key={index}
          title={data.title}
          objective={data.objective}
          footnote={data.footnote}
        />
      ))}
      <BottomView />
    </div>
  );
};

export default MyPage;
