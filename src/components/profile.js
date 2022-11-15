import * as React from 'react';
import { ProgressSteps, NumberedStep } from 'baseui/progress-steps';
import { Button, SHAPE, KIND, SIZE } from 'baseui/button';
import { useStyletron } from 'baseui';
import { Heading } from 'baseui/heading';
import { Block } from 'baseui/block';

function SpacedButton(props) {
    return (
        <Button
            {...props}
            shape={SHAPE.pill}
            kind={KIND.secondary}
            size={SIZE.compact}
            overrides={{
                BaseButton: {
                    style: ({ $theme }) => ({
                        marginLeft: $theme.sizing.scale200,
                        marginRight: $theme.sizing.scale200,
                        marginTop: $theme.sizing.scale800,
                    }),
                },
            }}
        />
    );
}
function ProgressStepsContainer() {
    const [current, setCurrent] = React.useState(0);
    const [css, theme] = useStyletron();
    return (
        <>
            <Block
                paddingLeft={['scale800', 'scale1200']}
                paddingRight={['scale800', 'scale1200']}
                paddingBottom={['scale400', 'scale400']}
            >
                <Heading> Becoming a 'good' student </Heading>
                <ProgressSteps current={current}>
                    <NumberedStep title="Update Profile">
                        <div className={css({ ...theme.typography.ParagraphSmall })}>
                            Complete Your Profile
                        </div>
                        <SpacedButton disabled>Previous</SpacedButton>
                        <SpacedButton onClick={() => setCurrent(1)}>
                            Next
                        </SpacedButton>
                    </NumberedStep>
                    <NumberedStep title="Complete Assignments">
                        <div className={css({ ...theme.typography.ParagraphSmall })}>
                            Finish your homework
                        </div>
                        <SpacedButton onClick={() => setCurrent(0)}>
                            Previous
                        </SpacedButton>
                        <SpacedButton onClick={() => setCurrent(2)}>
                            Next
                        </SpacedButton>
                    </NumberedStep>
                    <NumberedStep title="Mark Your Projects Complete">
                        <div className={css({ ...theme.typography.ParagraphSmall })}>
                            Do this too!
                        </div>
                        <SpacedButton onClick={() => setCurrent(1)}>
                            Previous
                        </SpacedButton>
                        <SpacedButton disabled>Next</SpacedButton>
                    </NumberedStep>
                </ProgressSteps>
            </Block>
        </>
    );
}
export default ProgressStepsContainer;