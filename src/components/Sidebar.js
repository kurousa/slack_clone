import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from './SidebarOption';
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { db } from "../lib/firebase-v8";
import { useCollection } from 'react-firebase-hooks/firestore';

function Sidebar() {
    // eslint-disable-next-line
    const [channels, loading, error] = useCollection(db.collection("rooms"));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                  <h2>HQ</h2>
                  <h3>
                      <FiberManualRecordIcon />
                      Kurousa
                  </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions"/>
            <SidebarOption Icon={DraftsIcon} title="Draft Items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channels"/>
            <SidebarOption Icon={PeopleAltIcon} title="Peoples"/>
            <SidebarOption Icon={FileCopyIcon} title="Apps"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>

            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>

            {channels?.docs.map(doc => (
              <SidebarOption 
                key={doc.id} 
                id={doc.id}  
                title={doc.data().name} 
                selectChannel
              />
            ))}

        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid var(--border-color);
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--border-color);
  }
`;

const SidebarHeader = styled.div`
  display:flex;
  border-bottom: 1px solid var(--border-color);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--border-color);
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;