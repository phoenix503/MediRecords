import React, { PureComponent } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";



export default class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const name = this.props.navigation.getParam("name", "");
    const email = this.props.navigation.getParam("email", "");
    const number = this.props.navigation.getParam("number", "");
    const password = this.props.navigation.getParam("password", "");
    console.log(email, name, number, password);

    return (
   
        <TouchableOpacity style={styles.card}>
          {/* <Image style={styles.cardImage} source={{uri:this.props.item.thumbnailUrl}}></Image> */}
          <Text style={styles.cardText}>{this.props.item.name}</Text>
        </TouchableOpacity>
      
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "lightblue",
    margin: 20,
    width: "90%",
    height: 200,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});
