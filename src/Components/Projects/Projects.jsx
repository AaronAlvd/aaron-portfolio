import './Projects.css'
import { TbBrandAirbnb } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";

export default function Projects() {
  
  return (
    <div className="projects-container">
    <div className="projects-list">
      {/* Projects Item 1 */}
      <div className="projects-item-1">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <a href={'https://ground-bnb-n5l7.onrender.com'} target="_blank" style={{textDecoration: 'none'}}>
            <h2 className="projects-institution">GroundBnb</h2>
          </a>
          <a href={'https://ground-bnb-n5l7.onrender.com'} target="_blank"><TbBrandAirbnb style={{color: 'white', fontSize: '20px', marginLeft: '7px', 
             transform: 'translateY(3px)'}}/></a>
        </div>
        <span className="projects-row-2">
          <p className="projects-degree">React/Express Web App</p>
          <p className="projects-year">Deployed - Completed</p>
        </span>
        <p className="projects-description">
          GroundBnB is a streamlined platform for discovering and managing short-term rental listings. Hosts can create, update, and delete 
          property listings, adding details like descriptions, photos, and availability. Guests can browse listings, view property details, and 
          leave reviews based on their experiences. The app features full CRUD functionality for user accounts, allowing users to sign up, log in, 
          update their profiles, and manage their reviews. With a simple, user-friendly interface, GroundBnB provides a seamless experience for 
          both hosts and guests, showcasing key features like property management, reviews, and account personalization. Designed for portfolio 
          purposes, GroundBnB highlights essential elements of a rental platform in an intuitive and engaging way.
        </p>
      </div>

      {/* Projects Item 2 */}
      <div className="projects-item-2">
      <div style={{display: 'flex', alignItems: 'center'}}>
          <a href={''} target="_blank" style={{textDecoration: 'none'}}>
            <h2 className="projects-institution">Web Tempel</h2>
          </a>
          <a href={''} target="_blank"><FaRegFileLines style={{color: 'white', fontSize: '20px', marginLeft: '7px', 
             transform: 'translateY(3px)'}}/></a>
        </div>
        <span className="projects-row-2">
          <p className="projects-degree">React/Flask Web App</p>
          <p className="projects-year">Deployed - Completed</p>
        </span>
        <p className="projects-description">
          Web Tempel is a knowledge-sharing platform designed to store and organize documents in a wiki-like format. Users can create, edit, and 
          organize articles on a wide range of topics, with full CRUD functionality for managing content. Each document is stored in a 
          user-friendly interface, allowing for easy browsing and searchability. Articles can be collaboratively updated, enabling multiple 
          users to contribute and maintain accurate, up-to-date information. The app also allows users to create categories and tags, making it 
          simple to organize and categorize documents for easy access. With a focus on efficient document management and seamless content creation, 
          Web Tempel provides a robust solution for storing and sharing knowledge in an accessible, scalable way. Designed with both simplicity and 
          functionality in mind, Web Tempel offers a streamlined, intuitive experience for anyone looking to contribute to or access a growing 
          library of information.
        </p>
      </div>

      {/* Projects Item 3 */}
      <div className="projects-item-3">
        <h2 className="projects-institution">Social App</h2>
        <span className="projects-row-2">
          <p className="projects-degree">React/Express Web App</p>
          <p className="projects-year">Deployed - Still in Progress</p>
        </span>
        <p className="projects-description">
          Social App is an innovative social media platform designed to bring people together and foster meaningful connections. With a sleek, 
          user-friendly interface, it allows users to create personalized profiles, interact with friends, and join dynamic communities. The app 
          offers full CRUD functionality for key features like groups, users, messages, comments, likes, posts, and group posts. Users can create 
          and manage groups, send private messages, post status updates, and engage with content by liking and commenting. Group posts enable 
          collaboration and interaction within specific communities, while personal posts give individuals a space to share thoughts, media, and 
          updates. The platform is designed with scalability and future growth in mind, with plans for a potential release to the public. Whether 
          it's keeping up with friends, discussing common interests in groups, or engaging in meaningful conversations, Social App aims to provide 
          a seamless, intuitive experience for social interactions in the digital age.
        </p>
      </div>
    </div>
  </div>
  )

}