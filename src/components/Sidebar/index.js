import React,{useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[posts, setPosts] = useState([]); 

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
  },[posts]);
 

  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span> About Us</span>
        </div>

        <div className="profileimageContainer">
          <img alt="dexter ouattara" src={require('../../blogPostImages/pavillons.png')} />
        </div>

        <div className="cardBody">
          <p>My name is Dexter Ouattara.I am a software developer. <br />
            I am HR Recruiter.
          </p>
        </div>

      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span> Social Network</span>
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span> RECENT POST</span>
        </div>

        {
          posts.map(post =>{
            return(
              <NavLink key={post.id} to={`/post/${post.id}`}>
                <div className="recentPost">
                  <h3 >{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>

            );
          })
        }

        <div className="recentPost">
            <h3 >POST TITLE</h3>
            <span>July 21, 2018</span>
        </div>
      </Card>
    </div>
   )
 }

export default Sidebar