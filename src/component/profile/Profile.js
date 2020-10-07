import React from "react";
import profileSVG from "../../assets/profile-svg.svg";

const Profile = () => {
  return (
    <div className="profile">
      <h2>Restu Kersana</h2>
      <span>Front End Developer, Content Writer</span>
      <p>
        Memiliki ketertarikan di dunia programming sejak 2018, terutama di
        bidang Front End Developer. Pernah membuat beberapa landing page untuk
        kebutuhan aplikasi website. Selain Front End Developer, menulis artikel
        menjadi kemampuan lain yang saya miliki.
      </p>
      <img src={profileSVG} alt="profile-svg" />
    </div>
  );
};

export default Profile;
