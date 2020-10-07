import React, { useState } from "react";
import SkillComp from "./SkillComp";

const Skill = () => {
  const [dataKey] = useState([
    { id: 1, done: "100", skill: 'HTML' },
    { id: 2, done: "100", skill: 'CSS' },
    { id: 3, done: "60", skill: 'Javascript' },
    { id: 4, done: "40", skill: 'ReactJS' },
    { id: 5, done: "60", skill: 'Bootstrap' },
    { id: 6, done: "40", skill: 'Tailwindcss' },
    { id: 7, done: "60", skill: 'Content Writing' },
  ]);


  return (
    <div className="skill">
      <h2>Skill</h2>
      {
        dataKey.map(data => (
          <SkillComp key={data.id} done={data.done} skill={data.skill} />
        ))
      }
    </div>
  );
};

export default Skill;
