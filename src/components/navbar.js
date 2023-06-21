import { Link } from "react-router-dom";
import {
  Image,
  Divider,
  Grid,Button
} from "semantic-ui-react";

export default function NavBar() {

  return (
    <>
      <Grid style = {{height : "13vh"}}>
        <Grid.Row>
          <Grid.Column width={1}>
            <Image
              style={{ margin: "10px 0px -14px 30px" }}
              src="https://react.semantic-ui.com/logo.png"
              alt="logo"
              size="tiny"
              circular
            />
          </Grid.Column>
          <Grid.Column width={15}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ marginTop: "2%",marginLeft:"2%"}}>
              Semantic SideBar
            </h3>
            
            <Button.Group color="gery" floated = "right" style = {{marginRight:"10px",marginTop:"15px"}}> 
            <Link to ='/about'>
              <Button value = "About" >About</Button>
              </Link>
            </Button.Group>
           
            </div>
          </Grid.Column>
        </Grid.Row><Divider />
      </Grid>
      
      
    </>
  );
}
