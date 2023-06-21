import {  useState,useMemo } from "react";

import {  Routes, Route, Link } from "react-router-dom";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,Button,
} from "semantic-ui-react";
import ContextComponent from "./contextComponent";

 function SidebarComp({children}) {
  // const {component,handleValueFromChild} = useContext(ContextComponent);
  const [show, setShow] = useState(true);
  const [count,setCount] = useState(0)
  const [name,setName] = useState("")
  console.log("sidebar re-renders")
  const myFunction = () => {
    console.log("This is myfunction from parent")
  }
  const contextValue = useMemo(() => {
    // Compute and return the context value
    // console.log("use memo ")
    setName(`I render only once`)
    return {name,myFunction};
  
  }, [name]);
const handleShoworHide = () => {
  // console.log("flag change",show)
 setShow(!(show));
}
const increment = () => {
  setCount((c) => c+1)
}

  return (
    <>
      <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
        <Grid style={{ height: "90vh"}}>
          <Grid.Row style={{ height: "100%"}}>
            <Grid.Column >

              <Sidebar
                as={Menu}
                animation="push"
                direction  = "left"
                icon="labeled"
                inverted
                vertical
                visible={show}
                width="thin "
                // onHide={() => setShow(false)}
               
              >
                <Link to="/home">
                  <Menu.Item as="a" >
                  <Icon name="home"/>
                    Home
                 
                </Menu.Item>
                </Link>
                <Link to="/games">
                  <Menu.Item as="a" >
                  <Icon name="gamepad" />
                  Games
                </Menu.Item>
                </Link>
                <Link to="/channels">
                  <Menu.Item as="a" >
                  <Icon name="camera" />
                 Channels
                </Menu.Item>
                </Link>
              </Sidebar>
            {/* </Grid.Column>
            <Grid.Column width={13}> */}
              <Sidebar.Pusher>
                <Segment basic>
                  <Header as="h3">Application Content( I re-render on every change in count)</Header>
                  
                  <Button onClick={handleShoworHide}>Show/Hide</Button>
                  <br/><br/>{count +" "} 
                  <Button onClick = {increment}>+</Button>
                  {/* <Checkbox
                    checked={show}
                    label={{ children: <code>visible</code> }}
                    onChange={(e, data) => setShow(data.checked)}
                  /> */}
                  <ContextComponent.Provider value = {contextValue}>
                  {children}
                  </ContextComponent.Provider>
                  
                </Segment>
              </Sidebar.Pusher>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Sidebar.Pushable>
    </>
  );
}
  export default SidebarComp