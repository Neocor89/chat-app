import React from 'react'
import { Channel, MessageText, useChatContext } from 'stream-chat-react';
//: Before MessageTeam is deprecated now its'possible use  is instantiated
import { ChannelInner, CreateChannel, EditChannel } from './';

const ChannelContainer = ({ isCreating, setIsCreating, isEditing, setIsEditing, createType }) => {
  //: Get info for specific channel
  const { channel } = useChatContext();

  //: Create channel
  if(isCreating) {
    return(
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }

  if(isEditing) {
    return(
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    )
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">This is the beginning of your chat history.</p>
      <p className="channel-empty__second">Send messages, attachements, links, emojis and more.</p>
    </div>
  )

  return (
    <div className="channel__container">
      <Channel 
      EmptyStateIndicator={EmptyState} //: Before = key={i} message={...messageProps}
      Message={(messageProps, i) => <MessageText key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
      </div>
  )
}

export default ChannelContainer