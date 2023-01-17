import React from "react";
import "./Gitstats.css";
import Githubcalendar from "react-github-calendar";

const Gitstats = () => {
  return (
    <div className="calenderTop">
      <h1>Github Calender</h1>
      <div className="calenderMain">
        <Githubcalendar
          className="c"
          margin="auto"
          username="SORDE12"
          blockSize={20}
          blockMargin={5}
          color={"#64dd17"}
          fontSize={15}
        />
      </div>

      <div className="gitStatus">
        
        <img
          className="githubcal"
          src="https://github-readme-streak-stats.herokuapp.com/?user=SORDE12&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"
        />
        <img
          className="githubcal"
          alt="SORDE12 stats"
          src="https://github-readme-stats.vercel.app/api?username=SORDE12&theme=react&hide_border=true&include_all_commits=true&count_private=true"
        />
      </div>
    </div>
  );
};

export default Gitstats;

//[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=SORDE12&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)
