import React, { useState } from 'react';

//: Dependencies Imports
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

//: components Imports
import { ChannelContainer, ChannelListContainer, Auth } from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apiKey = 'bbdm4zqd6c3b';
const authToken = cookies.get('token');

//! :: "new" = Test for fix one bug;
const client = StreamChat.getInstance(apiKey);

if(authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light' >
        <ChannelListContainer 
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        setCreateType={setCreateType}
        setIsEditing={setIsEditing}
        />
        <ChannelContainer 
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        createType={createType}
        />
      </Chat>
    </div>
  )
}

export default App