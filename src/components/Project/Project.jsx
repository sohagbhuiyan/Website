import React from "react";
import "./project.css";
import todo1 from "../../assets/t1.png"
import todo2 from "../../assets/t2.png"
import cal from "../../assets/cal.png"
import cal2 from "../../assets/cal2.png"
import st from "../../assets/st.png"
const Project = () => {
  return (
    <section id="project">
      <span className="projectIntro"> Here is My Projects</span>
      <div className="allProject">
        <div className="IndvProject">
          <img src={todo1} alt="todo" className="projectImg" />
          <span className="projectDesc">
            <h1>Todo-List</h1>
            <p>There is first JavaScript todo -list project , Its have two tab to add list item. One is for personal list and another is professional. When you done one task then you can mark it as checked, and if you want to delete the item you can easily by clicking the delete icon</p>
          </span>
        </div>
        <div className="IndvProject">
          <img src={st} alt="st" className="projectImg" />
          <span className="projectDesc">
            <h1>StopWatch</h1>
            <p>There is stopwatch made by react js. You can start, pause & stop it </p>
          </span>
        </div>
        <div className="IndvProject">
          <img src={todo2} alt="todo2" className="projectImg" />
          <span className="projectDesc">
            <h1>Todo-List 2</h1>
            <p>There is  another todo -list made by react js, where you can easily edit  remove and move on the task</p>
          </span>
        </div>
        <div className="IndvProject">
          <img src={cal} alt="cal" className="projectImg" />
          <span className="projectDesc">
            <h1>Calculator</h1>
            <p>There is simple calculator project made by JavaScript</p>
          </span>
        </div>
        <div className="IndvProject">
          <img src={cal2} alt="cal2" className="projectImg" />
          <span className="projectDesc">
            <h1>Interest Calculator</h1>
            <p>It is calulating Total amount of interest with rate and year </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Project;
