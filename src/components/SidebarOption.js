import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { enterChannel } from '../features/appSlice';
import { db } from "../lib/firebase-v8";
// When Firebase SDK V9, use below.
//import firebaseApp from '../firebase-v9';
//import { getFirestore, addDoc, collection } from 'firebase/firestore';

function SidebarOption({ Icon, title, addChannelOption, id }) {

    const dispatch = useDispatch();

    const addChannel = async () => {
        const channelName = prompt.apply('Please enter the channel name');
        if (channelName) {
            // Firebase SDK until Ver8.
            db.collection('rooms').add({
                name: channelName,
            })

            // Firebase SDK Ver9.
            //const db = getFirestore(firebaseApp)
            //const docRef = await addDoc(collection(db, "rooms"),{
            //    name: channelName,
            //})
            //console.log("Document written with ID: ", docRef.id);
        }
    };

    const selectChannel = () => {
        if (id) {
            dispatch(
              enterChannel({
                channelId: id
              })
            )
        };
    }

    return (
        <SidebarOptionContainer
          onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{ padding: 10 }}/>}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SiderOptionChannel>
                    <span>#</span> {title}
                </SiderOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;

    :hover {
      opacity: 0.9;
      background-color: #340e36;
    }

    > h3 {
      font-weight: 500;
    }

    > h3 > span {
      padding: 15px;
    }
`;

const SiderOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

`;