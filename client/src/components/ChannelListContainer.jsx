import React from 'react';
//: Components
import { ChannelList, useChatContext }from 'stream-chat-react';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
//: Dependencies
import Cookies from 'universal-cookie';

//: Assets
import HospitalIcon from '../assets/HospitalIcon.png';
import LogoutIcon from '../assets/logout.png';

const cookies = new Cookies();

const SideBar = ({ logout }) => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt="logo hospital" width="30" />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner' onClick={logout}>
        <img src={LogoutIcon} alt="logout" title="Exit Chat" width="30" />
      </div>
    </div>
  </div>
);

const CompagnyHeader = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Medical Chat App</p>
  </div>
)

/* 
:: For Fixing error SameSite Cookies => Google Analytics ::
:: document.cookie = 'cookie2=value2; SameSite=None; Secure'; ::
*/

const ChannelListContainer = ({ isCreating, setIsCreating, setCreateType, setIsEditing }) => {
  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('token');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');

    window.location.reload();

  }

  return (
    <>
      <SideBar logout={logout} />
      <div className='channel-list__list__wrapper'>
        <CompagnyHeader />
        <ChannelSearch />
         <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
          <TeamChannelList 
          {...listProps}
          type='team'
          isCreating={isCreating} 
          setIsCreating={setIsCreating} 
          setCreateType={setCreateType} 
          setIsEditing={setIsEditing}
          />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview 
            {...previewProps}
            type='team'
            />
        )}
        />
         <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
          <TeamChannelList 
          {...listProps}
          type='messaging'
          isCreating={isCreating} 
          setIsCreating={setIsCreating} 
          setCreateType={setCreateType} 
          setIsEditing={setIsEditing}
          />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview 
            {...previewProps}
            type='messaging'
            />
        )}
        />
      </div>
    </>
  );
}

export default ChannelListContainer