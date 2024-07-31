import { Tabs } from 'antd';
import React from 'react'
import Profile from './Profile';


export const UserProfile = () => {
    
    const items = [
        {
          key: '1',
          label: 'Profile',
          children:  <Profile/>,
        },
        {
          key: '2',
          label: 'Activity',
          children: 'Content of Tab Pane 2',
        },
        
      ];
  return (
    <div>UserProfile 
        <div>
        <Tabs defaultActiveKey="1" items={items}  />;
        </div>
    </div>
  )
}
