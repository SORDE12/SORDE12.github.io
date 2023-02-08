import React from "react";
import "./Gitstats.css";
import Githubcalendar from "react-github-calendar";


const Gitstats = () => {
  return (
    <div className="calenderTop">
      <h1>Github Calender and Status</h1>
      <div className="calenderMain">
        <Githubcalendar
          className="c"
          margin="auto"
          username="SORDE12"
          blockSize={20}
          blockMargin={5}
          color={"#64dd17"}
           fontSize={10}
          
        />
      </div>

      <div className="github-stats-imgs" style={{borderRadius:"2rem",display:'flex',width:"72%",margin:"auto", justifyContent:"space-between", paddingTop:"2rem"}}>
        <div className="github-stats-imgs1"> <img
          alt="SORDE12 stats" 
          src="https://github-readme-stats.vercel.app/api?username=SORDE12&theme=react&hide_border=true&include_all_commits=true&count_private=true"
        /></div>
        <div className="github-stats-imgs2"><img
          alt="SORDE12 stats"
          src="https://github-readme-stats.vercel.app/api?username=SORDE12&theme=react&hide_border=true&include_all_commits=true&count_private=true"
        /></div>
      </div>
    </div>
  );
};

export default Gitstats;

//[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=SORDE12&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)
