import React, { Fragment, useState } from "react";

const SkillComp = ({ done, key, skill }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);
  return (
    <Fragment>
      <h3>{skill}</h3>
      <div className="progress" id={key}>
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </Fragment>
  );
};

export default SkillComp;
