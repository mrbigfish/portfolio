import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class LeftNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) =>
      this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state;

      return (
          <Segment inverted>
              <Menu stackable inverted>
                  <Menu.Item 
                      name='home'
                      as={ Link }
                      to="/"
                      color="red" 
                      active={activeItem === 'home'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='resume'
                      as={ Link }
                      to="/resume"
                      color="red"
                      active={activeItem === 'resume'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='apps'
                      as={ Link }
                      to="/apps"
                      color="red"
                      active={activeItem === 'apps'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='contact'
                      as={ Link }
                      to="/contact"
                      color="red"
                      active={activeItem === 'contact'}
                      onClick={this.handleItemClick}
                  />
              </Menu>
          </Segment>
      );
  }
}