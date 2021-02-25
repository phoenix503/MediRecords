import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Card } from "./Components/Card";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  async componentDidMount() {
   const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
   const response = await fetch(url);
   let data = await response.json();
   this.state.items = data;
   this.state.loading = false;
   console.log(this.state.items[0]);
    this.render();
  }


  render() {
    // const name = this.props.navigation.getParam("name", "");
    // const email = this.props.navigation.getParam("email", "");
    // const number = this.props.navigation.getParam("number", "");
    // const password = this.props.navigation.getParam("password", "");
    // console.log(email, name, number, password);
    console.log(this.state.items.length);
   
      return (
        <View>
          <FlatList
          style={styles.container}
          data={this.state.items}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => <Card item={item}></Card>}
          >
  
          </FlatList>
        </View>
      );
    

  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
