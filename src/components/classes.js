import * as React from 'react';
import { Tabs, Tab, FILL } from 'baseui/tabs-motion';
import { Block } from 'baseui/block';
import { Notification } from 'baseui/notification';
import DeleteAlt from 'baseui/icon/delete-alt';
import { expandBorderStyles } from 'baseui/styles';
import { HintDot } from "baseui/badge";
import { Button } from 'baseui/button';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    FocusOnce,
} from 'baseui/modal';
import { Table } from "baseui/table";
import { EmoticonRating } from 'baseui/rating';



export default function Classes() {
    const [activeKey, setActiveKey] = React.useState(0);
    const [isOpen, setOpen] = React.useState(false);
    const DATA = [
        ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
        ['Jane Smith', 32, '100 Market st. San Francisco, California'],
        ['Joe Black', 33, '100 Macquarie st. Sydney, Australia'],
    ];
    const COLUMNS = ['Name', 'Age', 'Address'];
    const [value, setValue] = React.useState(1);



    return (
        <Block
            paddingLeft={['scale800', 'scale1200']}
            paddingRight={['scale800', 'scale1200']}
            paddingBottom={['scale400', 'scale400']}
        >
            <Tabs
                activeKey={activeKey}
                onChange={({ activeKey }) => setActiveKey(activeKey)}
                fill={FILL.fixed}
            >
                <Tab title={<HintDot>Assignments</HintDot>}>
                    Assignments
                    <Notification
                        overrides={{
                            Body: {
                                style: ({ $theme }) => ({
                                    ...expandBorderStyles($theme.borders.border600),
                                }),
                            },
                            CloseIcon: {
                                component: DeleteAlt,
                                style: { float: 'right', cursor: 'pointer' },
                            },
                        }}
                        closeable
                    >
                        You Get Notified when new Assignments drops
                    </Notification>
                    <React.Fragment>
                        <Button onClick={() => setOpen(s => !s)}>Complete Assignments</Button>
                        <Modal onClose={() => setOpen(false)} isOpen={isOpen}>
                            <FocusOnce>
                                <ModalHeader>Task A</ModalHeader>
                            </FocusOnce>
                            <ModalBody>
                                Once there are assignments you will be notified to complete them
                            </ModalBody>
                            <ModalFooter>
                                <ModalButton
                                    kind="tertiary"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </ModalButton>
                                <ModalButton autoFocus onClick={() => setOpen(false)}>
                                    Close
                                </ModalButton>
                            </ModalFooter>
                        </Modal>
                    </React.Fragment>
                </Tab>
                <Tab title="Students">
                    <Table
                        columns={["Name", "Age", "Address"]}
                        data={[
                            [
                                "Sarah Brown",
                                31,
                                "100 Broadway st. New York City, New York"
                            ],
                            [
                                "Jane Smith",
                                32,
                                "100 Market st. San Francisco, California"
                            ]
                        ]}
                    />
                </Tab>
                <Tab title="Admins">
                    <Table columns={COLUMNS} data={DATA} />
                </Tab>
                <Tab title="Settings">
                    Rate the class
                    <EmoticonRating
                        value={value}
                        onChange={({ value }) => setValue(value)}
                    />
                </Tab>
            </Tabs>
        </Block>
    );
}