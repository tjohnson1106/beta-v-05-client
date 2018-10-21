import React, { Component } from "react";
import { ScrollView } from "react-native";

import { StoryCard } from "../../components";

class FeedsScreen extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <StoryCard />
      </ScrollView>
    );
  }
}

export default FeedsScreen;
