import React, {Component} from "react";

class CreateContact extends Component {
    render() {
        return (
            <div>
               <form>
                   <input type="text" placeholder="name"></input>
                   <input type="text" placeholder="email"></input>
                   <button>Done</button>
               </form>
            </div>
        )
    }
}

export default CreateContact