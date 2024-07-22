import React from 'react'
import { ChannelContext, UserContext } from '../../App'

export default function ComponentF() {
    const user = React.useContext(UserContext);
    const channel = React.useContext(ChannelContext);
  return (
    // {/* <div>
    //      <UserContext.Consumer>
    //     {
    //         user => {
    //             return (
    //                 <ChannelContext.Consumer>
    //                     {
    //                         channel => {
    //                             return (
    //                                 <div>
    //                                     <h1>Component F</h1>
    //                                     <p>User: {user}</p>
    //                                     <p>Channel: {channel}</p>
    //                                 </div>
    //                             )
    //                         }
    //                     }
    //                 </ChannelContext.Consumer>
    //             )
    //         }
    //     }
    //     </UserContext.Consumer>
    // </div> */}

    <div>
        {user}-    {channel}
    </div>
  )
}
