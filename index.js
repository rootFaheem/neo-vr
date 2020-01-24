import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";

export default class neo_vr extends React.Component {
  state = {
    counter: 140000
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  incrementCounter = e => {
    e.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>Welcome Mr. Musk to React 360</Text>
          </View>
          <VrButton onClick={this.incrementCounter} style={styles.greetingBox}>
            <Text style={styles.greeting}>
              {`Click to increase the share value`}
            </Text>
          </VrButton>
          <Text style={styles.greeting}>
            {`Tesla Shares Value: ${this.state.counter}`}
          </Text>

          <View style={styles.greetingBox1}>
            <Text style={styles.greeting}>Tesla Factory This Side ==></Text>
          </View>
        </View>
        <View style={styles.panel1}>
          <Text style={styles.greeting}>Welcome Mr. Musk</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    // justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    margin: 30,
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greetingBox1: {
    margin: 100,
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30,
    color: "white"
  }
});

AppRegistry.registerComponent("neo_vr", () => neo_vr);
