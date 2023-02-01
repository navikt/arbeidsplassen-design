import { Heading, Stepper } from "@navikt/ds-react";
import { useState } from "react";

const StepperExample = () => {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <>
      <div className="mb-2">
        <Heading size="small" level="3" spacing>
          Default
        </Heading>
        <Stepper
          activeStep={activeStep}
          onStepChange={(x) => setActiveStep(x)}
          orientation="horizontal"
        >
          <Stepper.Step href="#">Din bedrift</Stepper.Step>
          <Stepper.Step href="#">Om stillingen</Stepper.Step>
          <Stepper.Step href="#">Motta søknader</Stepper.Step>
          <Stepper.Step href="#">Publisering</Stepper.Step>
        </Stepper>
      </div>
      <div className="mb-2">
        <Heading size="small" level="3" spacing>
          Wizard
        </Heading>
        <Stepper
          activeStep={activeStep}
          onStepChange={(x) => setActiveStep(x)}
          orientation="horizontal"
          className="mb-2"
        >
          <Stepper.Step href="#" completed>
            Din bedrift
          </Stepper.Step>
          <Stepper.Step href="#" completed>
            Om stillingen
          </Stepper.Step>
          <Stepper.Step href="#">Motta søknader</Stepper.Step>
          <Stepper.Step href="#" interactive={false}>
            Publisering
          </Stepper.Step>
        </Stepper>
      </div>
      <div className="mb-2">
        <Heading size="small" level="3" spacing>
          Display only
        </Heading>
        <Stepper activeStep={-1} interactive={false} orientation="horizontal">
          <Stepper.Step href="#">Din bedrift</Stepper.Step>
          <Stepper.Step href="#">Om stillingen</Stepper.Step>
          <Stepper.Step href="#">Motta søknader</Stepper.Step>
          <Stepper.Step href="#">Publisering</Stepper.Step>
        </Stepper>
      </div>
      <div className="mb-2">
        <Heading size="small" level="3" spacing>
          Vertical
        </Heading>
        <Stepper
          activeStep={activeStep}
          onStepChange={(x) => setActiveStep(x)}
          orientation="vertical"
        >
          <Stepper.Step href="#">Din bedrift</Stepper.Step>
          <Stepper.Step href="#">Om stillingen</Stepper.Step>
          <Stepper.Step href="#">Motta søknader</Stepper.Step>
          <Stepper.Step href="#">Publisering</Stepper.Step>
        </Stepper>
      </div>
    </>
  );
};

export default StepperExample;
