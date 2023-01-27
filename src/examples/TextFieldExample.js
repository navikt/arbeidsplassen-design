import React from "react";
import {TextField} from "@navikt/ds-react";

function TextFieldExample() {
    return (
        <>
            <TextField
                className="mb-2"
                label="Har du noen tilbakemeldinger?"
                description="Vi lagrer bare selve meldingen, ikke hvem som sendte den."
            />

            <TextField
                label="Har du noen tilbakemeldinger?"
                error="Tilbakemeldingen er for kort."
            />
        </>
    );
}

export default TextFieldExample;
