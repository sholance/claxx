import { styled } from 'baseui';
import { Heading, HeadingLevel } from 'baseui/heading'
import { Block } from 'baseui/block';
import { StatefulTabs, Tab } from "baseui/tabs-motion";
import NavBar from './components/navbar';
import Projects from './components/projects';
import "./App.css"
import Classes from './components/classes';

// const Wrap = styled('section', {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: "100%"
// });

export default function App() {
  return (
    <Block>
      <HeadingLevel>
        <NavBar />
      </HeadingLevel>
    </Block>
  );
}