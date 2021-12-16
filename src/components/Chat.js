import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { useSelector } from 'react-redux';
import { selectChannelId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../lib/firebase-v8';
import Messages from './Messages';

function Chat() {

    const channelId = useSelector(selectChannelId);
    const [roomDetails] = useDocument( 
        channelId && 
        db
          .collection("rooms")
          .doc(channelId)
    )
    const [roomMessages] = useCollection(
        channelId &&
        db
          .collection("rooms")
          .doc(channelId)
          .collection("messages")
          .orderBy("timestamp", "asc")
    )

    console.log(roomDetails?.data().name)
    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#{roomDetails?.data().name}</strong>
                        </h4>
                        <StarBorderOutlinedIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>
                    {roomMessages?.docs.map(doc => {
                        const { message, timestamp, user, userImage } = doc.data();
                        return (
                          <Messages
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                          />
                        )
                    })}
                </ChatMessages>

                <ChatInput
                    channelName={roomDetails?.data().name}
                    channelId={channelId}
                />
            </>
        </ChatContainer>
    )
}

export default Chat

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 20px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    } 

    > p > .MuiSvgIcon-root {
        margin-right: 5px;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`

`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;

`;