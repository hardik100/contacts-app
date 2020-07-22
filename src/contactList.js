import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { ListItemText } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    };
  }
  async componentDidMount(item) {
    const url = "https://reqres.in/api/users?page=2";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ items: data.data });
    console.log(data.data);
  }
  removeContact = (item) => {
    this.setState((currentState) => ({
      items: currentState.items.filter((c) => {
        return c.id !== item.id;
      }),
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        {items ? (
          <ul>
            {items.map((item) => (
              <List key={item.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={item.avatar} alt="pic"></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    {item.first_name} {item.last_name} <br /> {item.email}
                  </ListItemText>
                  <button>
                    <EditIcon onClick={this.props.onNavigate} />
                  </button>
                  <button onClick={this.removeContact.bind(this, item)}>
                    <DeleteIcon />
                  </button>
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}
export default ContactList;
