// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#021C1E"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress={"none"} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              RDD, CDD, TDD
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              3 exercises
            </Heading>
          </Slide>
					<Slide transition={["slide"]} bgColor="primary">
            <List ordered textColor="white">
              <ListItem>Write the README.md</ListItem>
              <ListItem>Write missing comments with JSDoc</ListItem>
              <ListItem>Write Unit Tests with mocha</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Just tell me what to do
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <List ordered textColor="white">
              <ListItem>Fork the project https://github.com/92bondstreet/rdd-cdd-tdd via github</ListItem>
              <ListItem>Clone the project git clone https://github.com/YOUR_USERNAME/rdd-cdd-tdd</ListItem>
              <ListItem>Update README.md file</ListItem>
              <ListItem>Update tests file</ListItem>
							<ListItem>Update lib JSDoc comments</ListItem>
              <ListItem>Don't forget to commit and push before 4/7 PM</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="white">
              Focus on taking care of people
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
