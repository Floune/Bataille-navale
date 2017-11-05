import React, { Component } from 'react';
// import Grille from './Grille';

class Mapp extends Component {

  constructor() {
    super();
    this.state = {
      class: 'blue',
      state: 'empty'
    }
    this.change = this.change.bind(this);
  }


  change(node) {
    console.log(this.state.class);
    console.log(this.state.state);
    if (this.state.state === "empty")
    {
      this.setState({
        class: 'red',
        state: 'filled'
      });
    }
    else
    {
        this.setState({
        class: 'blue',
        state: 'empty'
      });
    }
    // let j = document.getElementsByClassName('blue');
    // for(var i=1;i<99;i++){
    // j[i].className="";
    // }
    // node.className('red');
  }


  render() {
    return (

        <table>
        <tbody>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        <tr>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
            <td className={this.state.class} onClick={this.change.bind(this)}>kikou</td>
        </tr>
        </tbody>
      </table>
      );
  }
}

export default Mapp