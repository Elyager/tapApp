import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'
import data from '../../api2.json'

import VerticalPlaylist from '../../vertical-playlist/components/vertical-playlist';
import VerticalPlalistContainer from '../../vertical-playlist/containers/vertical-playlist';
import FriendPlaylist from '../../vertical-playlist/components/friend-playlist';
import MyPlaylist from '../../vertical-playlist/components/my-playlist';

function Related(props) {
  return (
    <div className="Related">
      <img src={logo} alt="platzi-video" width={250}/>
      <VerticalPlalistContainer>
        <VerticalPlaylist
          title={"Mi Playlist"}
        >
          <MyPlaylist data={data} />
        </VerticalPlaylist>
        <VerticalPlaylist
          title={"Playlist de Amigos"}
        >
          <FriendPlaylist data={data} />
        </VerticalPlaylist>
      </VerticalPlalistContainer>
    </div>
  )
}

export default Related