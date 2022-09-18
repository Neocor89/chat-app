import React from 'react';
//: Components
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import { ChannelList, useChatContext }from 'stream-chat-react';
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
//:: document.cookie = 'cookie2=value2; SameSite=None; Secure'; :://
//:: For Fixing error SameSite Cookies => Google Analytics
const ChannelListContainer = () => {
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
        filter={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
          <TeamChannelList 
          {...listProps}
          type='team'
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
        filter={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
          <TeamChannelList 
          {...listProps}
          type='messaging'
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