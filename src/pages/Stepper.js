import { Heading, Stepper } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";

const StepperExample = () => {
    const [activeStep, setActiveStep] = useState(3);

    return (
        <Layout title="Stepper">
            <div className="mb-16">
                <Heading size="small" level="3" spacing>
                    Interactive
                </Heading>
                <Stepper activeStep={activeStep} onStepChange={(x) => setActiveStep(x)} orientation="horizontal">
                    <Stepper.Step href="#">Din bedrift</Stepper.Step>
                    <Stepper.Step href="#">Om stillingen</Stepper.Step>
                    <Stepper.Step href="#">Om bedriften</Stepper.Step>
                    <Stepper.Step href="#">Motta søknader</Stepper.Step>
                    <Stepper.Step href="#">Publisering</Stepper.Step>
                </Stepper>
            </div>

            <div className="mb-16">
                <Heading size="small" level="3" spacing>
                    With inactive step 2
                </Heading>
                <Stepper activeStep={activeStep} orientation="horizontal">
                    <Stepper.Step href="#">Din bedrift</Stepper.Step>
                    <Stepper.Step href="#" interactive={false}>
                        Om stillingen
                    </Stepper.Step>
                    <Stepper.Step href="#">Om bedriften</Stepper.Step>
                    <Stepper.Step href="#">Motta søknader</Stepper.Step>
                    <Stepper.Step href="#">Publisering</Stepper.Step>
                </Stepper>
            </div>

            <div className="mb-16">
                <Heading size="small" level="3" spacing>
                    Wizard
                </Heading>
                <Stepper
                    activeStep={activeStep}
                    onStepChange={(x) => setActiveStep(x)}
                    orientation="horizontal"
                    className="mb-8"
                >
                    <Stepper.Step href="#" completed>
                        Din bedrift
                    </Stepper.Step>
                    <Stepper.Step href="#" completed>
                        Om stillingen
                    </Stepper.Step>
                    <Stepper.Step href="#">Om bedriften</Stepper.Step>
                    <Stepper.Step href="#" interactive={false}>
                        Motta søknader
                    </Stepper.Step>
                    <Stepper.Step href="#" interactive={false}>
                        Publisering
                    </Stepper.Step>
                </Stepper>
            </div>
        </Layout>
    );
};

export default StepperExample;
