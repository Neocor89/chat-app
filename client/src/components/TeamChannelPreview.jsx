import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();

  const channelPreview = () => (
    <p>
      # { channel?.data?.name || channel?.data?.id }
    </p>
  );

  const directPreview = () => {
    const menbers = Object.values(channel.state.menbers).filter(({ user }) => user.id !== client.userID )
  }
  return (
    <div></div>
  )
}

export default TeamChannelPreview