import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Grid,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";
import PersonIcon from "@mui/icons-material/Person";

function UserList() {
  const Demo = styled("div")(({ theme }) => ({
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
              <div>
                <Divider />
                <ListItem
                  button
                  component={Link}
                  to={`/users/${user._id}`}
                  key={user._id}
                >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${user.first_name} ${user.last_name}`}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Demo>
      </Grid>
    </div>
  );
}

export default UserList;
