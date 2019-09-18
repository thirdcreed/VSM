import React, { useState, Fragment } from 'react'
import {Icon,  Menu, Segment, Sidebar, Button } from 'semantic-ui-react';
import {ToolConsumer} from './MainPage'



const MainPage = (props) => {
    // const [visible, toggleVisibility] = useState(true);
    
    return (
    <ToolConsumer>{ ({tool, changeTool}) =>
      (<Fragment>
        <Sidebar.Pushable  as={Segment}>
          <Sidebar
          direction="right"
            as={Menu}
            animation='overlay'
            icon='labeled'
            vertical={true}
            thin 
            visible={props.visible}
        >

          <Button.Group basic  vertical>
            <Button 
              toggle={tool === 'cursor'} 
              icon="mouse pointer" 
              onClick={() => changeTool('cursor')}/>
            <Button 
              toggle={tool === 'move'} 
              onClick={() => changeTool('move')}
              icon="move" />
              {console.log({tool}, {changeTool})}
            <Button 
               toggle={tool === 'zoom-out'} 
               onClick={() => changeTool('zoom-out')}
               icon="zoom-out" />
            <Button 
              toggle={tool === 'zoom-in'} 
              onClick={() => changeTool('zoom-in')}
              icon="zoom-in" />
            <Button icon="eraser" />
          </Button.Group>
          <Button.Group basic  vertical>
            <Button icon="save outline" />
            <Button icon="undo" />
            <Button icon="redo" />
          </Button.Group>
          
        </Sidebar>
        <Sidebar.Pusher>
        <Segment basic>
         {props.children}
        </Segment>
      </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Fragment>)}
      </ToolConsumer>
    )
}

export default MainPage;