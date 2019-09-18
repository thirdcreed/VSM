import React, { useState, Fragment } from 'react'
import Menu from './Menu';
import OrgPage from './OrgPage';


const ToolContext = React.createContext();
export const ToolConsumer =  ToolContext.Consumer;
export const ToolProvider =  ToolContext.Provider;



const MainPage = (props) => {
    const [visible, toggleVisibility] = useState(true);
    const [tool, changeTool] = useState('cursor');
    return (
      <Fragment>
        <ToolProvider value={{tool, changeTool}}>
          <Menu toggleVisibility={toggleVisibility} visible={visible}>
            <OrgPage toggleVisibility={toggleVisibility}></OrgPage>
          </Menu>
        </ToolProvider>
      </Fragment>
    )
}

export default MainPage;