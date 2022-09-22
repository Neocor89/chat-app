import React, { useState, useEffect }from 'react';
import { Avatar, useChatChannel } from 'stream-chat-react'

import { InviteIcon } from '../assets'

const ListContainer = ({children}) => {
  return (
    <div className="user-list__container">
      <div className="user-list__header">
        <p>User</p>
        <p>Invite</p>
      </div>
      {children}
    </div>
  )
}

//: Users List Components

const UserItem = () => {
  return (
    <div className="user-item__wrapper">
      {/* <div className="user-list__header">
        <p>Usertem</p>
      </div> */}
    </div>
  )
}

const UserList = () => {
  return (
    <div className="">
      UserList
      </div>
  )
}

export default UserList