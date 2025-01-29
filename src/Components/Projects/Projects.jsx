import './Projects.css'
import { TbBrandAirbnb } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { useModal } from '../../context/modal';
import groundbnb from '../../assets/Groundbnb.png';
import DisplayImage from '../DisplayImage/DisplayImage';
import { useState, useEffect } from 'react';

export default function Projects() {
  const { setModalContent } = useModal();
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className='Projects' style={{height: `${width > 1039 ? height - 170 + 'px' : 'min-content'}`}}>
      <div className='Projects-section'>
        <p className='Projects-title'>GroundBnb</p>
        <button onClick={() => setModalContent(<DisplayImage image={groundbnb}/>)} style={{margin: '15px 15px 15px 0', fontSize: '14px'}}>
         View Image
        </button>
        <button onClick={() => window.open('https://ground-bnb-n5l7.onrender.com/', '_blank')}>
          View GroundBnb
        </button>
        <p><strong>GroundBnB: A Vacation Rental Platform</strong></p>
        <p>GroundBnB is a full-stack web application that allows users to book vacation homes, similar to Airbnb. Users can browse home listings, book stays, and manage their reservations. Hosts can list their properties, update availability, and interact with potential guests. The platform focuses on providing a smooth user experience for both travelers and hosts.</p>

        <p>I developed this application using <strong>React</strong>, <strong>Redux</strong>, <strong>Express</strong>, and <strong>Sequelize</strong> for the backend. Key features include:</p>
        <ul>
          <li><strong>User Authentication:</strong> Implemented secure user authentication with JWT, enabling users to sign up, log in, and manage their bookings.</li>
          <li><strong>Home Listings:</strong> Users can browse and search for vacation homes by location, price, and other filters. Hosts can create, update, and remove their listings.</li>
          <li><strong>Booking System:</strong> Implemented a booking feature that allows users to select dates, confirm availability, and reserve homes. Users can also manage their bookings.</li>
          <li><strong>Frontend with React & Redux:</strong> Built the user interface with React, and managed application state using Redux, ensuring seamless interactions between components like booking forms and search results.</li>
          <li><strong>Backend with Express & Sequelize:</strong> Used Express to build the API that handles requests, and Sequelize to manage the database, ensuring efficient data retrieval and manipulation.</li>
          <li><strong>CRUD Operations:</strong> Provided full Create, Read, Update, and Delete functionality for listings and bookings, ensuring users and hosts could manage their content.</li>
          <li><strong>Responsive Design:</strong> Designed the platform to be fully responsive, ensuring that it works seamlessly across desktop and mobile devices.</li>
        </ul>

        <p>This project sharpened my skills in full-stack development, API design, state management, and building a responsive, user-friendly application that can scale to meet real-world demands.</p>
      </div>

      <div className='Projects-section' style={{marginTop: '40px'}}>
        <p className='Projects-title'>WikiDocs</p>
        <button onClick={() => setModalContent(<DisplayImage image={groundbnb}/>)} style={{margin: '15px 15px 15px 0', fontSize: '14px'}}>
         View Image
        </button>
        <button onClick={() => window.open('https://ground-bnb-n5l7.onrender.com/', '_blank')}>
          View WikiDocs
        </button>
        <p><strong>WikiDocs: A Collaborative Article Platform</strong></p>
        <p>A full-stack web application where users can upload, create, edit, and delete articles, documents, and prompts, similar to Wikipedia. The platform allows users to create new content, edit their own submissions, and delete articles they've uploaded. Users can only edit or delete articles they own.</p>
          
        <p>I built the application using <strong>React</strong> and <strong>Redux</strong> on the frontend, and <strong>Flask</strong> with <strong>SQLAlchemy</strong> on the backend. Key features include:</p>
        <ul>
          <li><strong>User Authentication:</strong> Secure login and registration with JWT authentication to allow users to manage their own content.</li>
          <li><strong>Article Management:</strong> Users can create, upload, and view articles/documents. They can also edit or delete only their own submissions.</li>
          <li><strong>Frontend with React & Redux:</strong> Used React for building dynamic user interfaces and Redux for state management, ensuring smooth interactions across pages and components.</li>
          <li><strong>Backend with Flask & SQLAlchemy:</strong> Implemented RESTful API endpoints using Flask, with SQLAlchemy for database models and ORM (Object Relational Mapping) to handle data persistence and relationships.</li>
          <li><strong>CRUD Operations:</strong> Created full Create, Read, Update, and Delete functionality for articles, with appropriate API endpoints for handling data and user actions.</li>
          <li><strong>Authorization & Access Control:</strong> Ensured that users could only interact with their own content by checking user ownership in backend routes.</li>
        </ul>
          
        <p>This project helped me refine my skills in full-stack development, including authentication and authorization, state management, and building scalable applications with Flask and React.</p>
      </div>
      <div className='Projects-section' style={{marginTop: '40px'}}>
        <p className='Projects-title'>Social App</p>
        <button onClick={() => setModalContent(<DisplayImage image={groundbnb}/>)} style={{margin: '15px 15px 15px 0', fontSize: '14px'}}>
         View Image
        </button>
        <button onClick={() => window.open('https://ground-bnb-n5l7.onrender.com/', '_blank')}>
         View Social App
        </button>
        <p><strong>SocialApp: A Social Media Platform</strong></p>
        <p>SocialApp is a full-stack web application that allows users to create profiles, post updates, follow other users, like and comment on posts, and interact with content in a social network environment. The platform enables users to stay connected with friends, share content, and engage in conversations, similar to popular social media platforms.</p>

        <p>I developed this application using <strong>React</strong>, <strong>Redux</strong>, <strong>Express</strong>, and <strong>PostgreSQL</strong> for the backend. Key features include:</p>
        <ul>
          <li><strong>User Authentication:</strong> Implemented secure login and registration with JWT and OAuth integration, allowing users to sign up, log in, and maintain sessions.</li>
          <li><strong>User Profiles:</strong> Users can create and update their profiles, upload profile pictures, and customize their bio.</li>
          <li><strong>Post Creation & Interaction:</strong> Users can create text and image posts, like and comment on posts from others, and share content with their followers.</li>
          <li><strong>Following System:</strong> Users can follow other users to see their posts on the feed, and unfollow when desired. A dynamic feed shows posts from followed users.</li>
          <li><strong>Frontend with React & Redux:</strong> Built dynamic user interfaces with React and used Redux for state management to ensure smooth and efficient updates across the app.</li>
          <li><strong>Backend with Express & PostgreSQL:</strong> Used Express to set up RESTful API routes, and MongoDB for scalable, schema-less storage of user data, posts, comments, and relationships.</li>
          <li><strong>Real-time Updates:</strong> Implemented real-time features using WebSockets to allow instant updates on new posts, likes, and comments, creating an interactive user experience.</li>
          <li><strong>Responsive Design:</strong> Designed the platform with a mobile-first approach to ensure that it functions seamlessly across various devices, including mobile phones, tablets, and desktops.</li>
        </ul>

        <p>This project enhanced my skills in full-stack development, user authentication, real-time data updates, and building dynamic web applications that scale to support a growing user base. It also helped me explore the intricacies of social networking features like following, liking, and commenting.</p>
      </div>
      <div style={{minHeight: '40px'}}></div>
    </div>
  )

}