import React, { Component } from "react";
import ContactList from "./contactList";
import CreateContact from "./CreateContact";
class App extends Component {
  state = {
    screen: "list",
  };

  render() {
    return (
      <div>
        {this.state.screen === "list" && (
          <ContactList
            onNavigate={() => {
              this.setState(() => ({
                screen: "create",
              }));
            }}
          />
        )}
        {this.state.screen === "create" && <CreateContact />}
      </div>
    );
  }
}
export default App;
