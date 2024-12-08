import css from "./Profile.module.css";

import React from "react";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profCard}>
      <div className={css.profInfo}>
        <img src={image} className={css.profImg} alt={name} />
        <p className={css.profName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profStats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
