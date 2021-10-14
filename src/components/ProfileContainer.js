/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import pic from './spike.png';
import './ProfileContainer.css';

const ProfileContainer = () => {
  let clickCheck = false;

  const [discordTag, setDiscordTag] = useState('💬Discord');

  const leaveClickHandler = () => {
    setDiscordTag('💬Discord');
  };

  const enterClickHandler = () => {
    if (clickCheck) {
      setDiscordTag('💬Copied!');
    }
  };

  const clickHandler = () => {
    navigator.clipboard.writeText('Spark#8162');
    setDiscordTag('💬Copied!');
  };

  return (
    <>
      <div>
        <img
          src={pic}
          alt='Profile pic'
          className='img-profile'
          draggable={false}
          downloadable={false}
        />
      </div>
      <div className='container'>
        <div className='sub-container-one'>
          <a
            href='https://twitter.com/SparkSpiegel'
            className='link'
            target='_blank'
            rel='noreferrer'
          >
            🐦Twitter
          </a>
          <a
            href='https://fr.finalfantasyxiv.com/lodestone/character/21862853/'
            className='link'
            target='_blank'
            rel='noreferrer'
          >
            ⚔️FFXIV
          </a>
          <a
            className='link'
            href=''
            onClick={clickHandler}
            onMouseEnter={enterClickHandler}
            onMouseLeave={leaveClickHandler}
          >
            {discordTag}
          </a>
        </div>
        <div className='sub-container-one'>
          <a
            className='link'
            href='https://github.com/Serotops'
            target='_blank'
            rel='noreferrer'
          >
            💻Github
          </a>
          <a
            className='link'
            href='https://steamcommunity.com/id/spaarkfr/'
            target='_blank'
            rel='noreferrer'
          >
            🎮Steam
          </a>
          <a
            className='link'
            href='https://www.twitch.tv/sparknotavailable'
            target='_blank'
            rel='noreferrer'
          >
            💜Twitch
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
