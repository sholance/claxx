import React from 'react';
import { Block } from 'baseui/block';
import { Input } from "baseui/input";
import { Button, SIZE } from 'baseui/button';
import { Heading, HeadingLevel } from 'baseui/heading';
import {
    MessageCard,
    BUTTON_KIND
} from "baseui/message-card";
import {
    AspectRatioBox,
    AspectRatioBoxBody,
} from 'baseui/aspect-ratio-box';
import { useNavigate } from "react-router-dom";



export default function Landing() {
    const [value, setValue] = React.useState("");
    const [clax, setClax] = React.useState('')
    const navigate = useNavigate();
    const handleClick = () => {
        if (value !== "") {
            navigate(`class/${value}`);
        } else {
            console.log('enter classroom name')
        }
    }
    const bodyProps = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    };

    return (
        <Block>
            <AspectRatioBox aspectRatio={16 / 9}>
                <AspectRatioBoxBody {...bodyProps}>

                    <Block className={''}>
                        <Heading>Welcome To Clax</Heading>
                        <p className='align-center'>Classroom Name</p>

                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Enter Classroom Name"
                            clearOnEscape
                        />
                        <div
                            className="align-center"
                        >
                            <Button
                                size={SIZE.compact}
                                onClick={handleClick}
                            >
                                Create Classroom
                            </Button>
                        </div>
                    </Block>
                </AspectRatioBoxBody>
            </AspectRatioBox>

        </Block>
    );
}