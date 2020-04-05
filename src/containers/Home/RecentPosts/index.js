import React from 'react'
import "./style.css";
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
    <Card style={{ margin: "20px 0" }}>
      <div className="postImageWrapper">
        <img
          alt="dexter ouattara"
          src={require("../../../blogPostImages/memories-from.jpg")}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <span>Featured</span>
        <h2>The title 2</h2>
        <span>Post on July 21, 2018 by Sora Blogging Tips</span>
        <p>
          efkdjh edfuh uherdfb erudhf erdfuyhn erduhfs erdsfyuhed. efkdjh
          edfuh uherdfb erudhf erdfuyhn erduhfs erdsfyuhed efkdjh edfuh uherdfb erudhf erdfuyhn erduhfs erdsfyuhed
        </p>
        <button>Read More</button>

      </div>
    </Card>
    </div>
    
   )

 }

export default RecentPosts