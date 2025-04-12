import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Grid,
  styled
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import PersonIcon from "@mui/icons-material/Person";

function UserList () {

    const Demo = styled('div')(({ theme }) => ({
      backgroundColor: (theme.vars || theme).palette.background.paper,
    }));

    const users = models.userListModel();
    const [dense, setDense] = React.useState(false);

    console.log(`User: ${users[0].first_name}`);

    return (
      <div>
        <h1>Users</h1>
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Demo>
            <List dense={dense}>
              {users.map((user) => (
                <ListItem key={user._id}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText
                  
                    primary= {`${user.first_name} ${user.last_name}`}
                  />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </div>
    );
}

export default UserList;
