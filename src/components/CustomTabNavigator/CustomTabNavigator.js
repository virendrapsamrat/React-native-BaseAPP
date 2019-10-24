import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "../../views/Home/Home";
import Search from "../../views/Home/Search";
import Menu from "../../views/Home/Menu";
import Notification from "../../views/Home/Notification";
import Cart from "../../views/Home/Cart";

export default class CustomTabNavigator extends Component {
  constructor() {
    super()
    this.state = {
      page: "Home",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "Home" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        {this.state.page === "Home" && <Home />}
        {this.state.page === "Search" && <Search />}
        {this.state.page === "Menu" && <Menu />}
        {this.state.page === "Notification" && <Notification />}
        {this.state.page === "Cart" && <Cart />}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "Home",
              icon: "home",
            },
            {
              page: "Search",
              icon: "search",
            },
            {
              page: "Menu",
              icon: "menu",
            },
            {
              page: "Notification",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "Cart",
              icon: "cart",
              badgeNumber: 5,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1
      }
    });