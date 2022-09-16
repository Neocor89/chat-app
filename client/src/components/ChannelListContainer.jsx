import React from 'react';

//: Dependencies
import { ChannelList, useChatContext }from 'stream-chat-react';
import { Cookies }from 'universal-cookie';

//: Assets
import HospitalIcon from '../assets/HospitalIcon.png';
import LogoutIcon from '../assets/logout.png';

//: Components
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt="logo hospital" width="30" />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogoutIcon} alt="logout" width="30" />
      </div>
    </div>
  </div>
);

const CompagnyHeader = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Medical Chat App</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
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