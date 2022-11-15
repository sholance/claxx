import * as React from 'react';
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Avatar } from 'baseui/avatar';
import { useStyletron, expandBorderStyles } from 'baseui/styles';
import { Button } from 'baseui/button';
import { StyledLink } from "baseui/link";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Classes from './classes';
import Projects from './projects';
import Landing from "./landing";
import Profile from "./profile";
import NewClass from './newClass';

const SuperLink = props => <StyledLink $as={Link} {...props} />;

export default function Navbar() {
    return (
        <Router>
            <div>
                <HeaderNavigation className={'nav-bar'}>
                    <NavigationList $align={ALIGN.left}>
                        <NavigationItem>
                            <SuperLink to="/">Claxx</SuperLink>
                        </NavigationItem>
                    </NavigationList>
                    <NavigationList $align={ALIGN.center} />
                    <NavigationList $align={ALIGN.right}>
                        <NavigationItem>
                            <SuperLink to="/class/registered">My Class</SuperLink>
                        </NavigationItem>
                        <NavigationItem>
                            <SuperLink to="/projects">Projects</SuperLink>
                        </NavigationItem>
                    </NavigationList>
                    <NavigationList $align={ALIGN.right}>
                        <NavigationItem>
                            <Link to="/profile">
                                <Avatar
                                    overrides={{
                                        Root: {
                                            style: ({ $theme }) => ({
                                                ...expandBorderStyles($theme.borders.border500),
                                            }),
                                        },
                                    }}
                                    name="kolade victor"
                                    size="scale1000"
                                    src="https://not-a-real-image.png"
                                    Link="/profile"
                                />
                            </Link>
                        </NavigationItem>
                    </NavigationList>
                </HeaderNavigation>
                <Routes>
                    <Route path="/class/:id" element={<Classes />} >class</Route>
                    <Route path="/new" element={<NewClass />} >new</Route>
                    <Route path="/projects" element={<Projects />} >projects</Route>
                    <Route path="/profile" element={<Profile />} >profile</Route>
                    <Route path="/" element={<Landing />} >Home</Route>
                </Routes>
            </div>
        </Router>
    );
}