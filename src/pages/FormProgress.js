import { useState } from "react";
import { FormProgress } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const FormProgressExample = () => {
    const [activeStep, setActiveStep] = useState(2);

    return (
        <Layout title="FormProgress">
            <FormProgress totalSteps={5} activeStep={activeStep} onStepChange={setActiveStep}>
                <FormProgress.Step completed href="#">
                    Dine opplysninger
                </FormProgress.Step>
                <FormProgress.Step href="#">Om stillingen</FormProgress.Step>
                <FormProgress.Step href="#">Om bedriften</FormProgress.Step>
                <FormProgress.Step href="#">Søknad</FormProgress.Step>
                <FormProgress.Step interactive={false}>Oppsummering</FormProgress.Step>
            </FormProgress>
        </Layout>
    );
};

export default FormProgressExample;
