import * as React from 'react';
import { Tabs, Tab, ORIENTATION } from 'baseui/tabs-motion';
import { StatefulList } from 'baseui/dnd-list';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import Hide from 'baseui/icon/hide';

export default function Projects() {
    const [activeKey, setActiveKey] = React.useState(0);
    const [css, theme] = useStyletron();
    const bodyProps = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    };

    return (
        <>
            <Block
                paddingLeft={['scale800', 'scale1200']}
                paddingRight={['scale800', 'scale1200']}
                paddingBottom={['scale400', 'scale400']}
            >
                <div
                    className={css({
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '200px'
                    })}
                >
                    <Hide size={theme.sizing.scale1600} />
                    <div
                        className={css({
                            ...theme.typography.HeadingXSmall,
                            paddingBlockStart: theme.sizing.scale650,
                            paddingBlockEnd: theme.sizing.scale500,
                        })}
                    >
                        All caught up
                    </div>
                    <div
                        className={css({
                            ...theme.typography.ParagraphMedium,
                            paddingBlockEnd: theme.sizing.scale650,
                        })}
                    >
                        Check back for new projects.
                    </div>
                    <Button
                        onClick={() => { }}
                        kind={KIND.secondary}
                        shape={SHAPE.pill}
                        size={SIZE.compact}
                    >
                        Go back
                    </Button>
                </div>
            </Block>

        </>
    );
}