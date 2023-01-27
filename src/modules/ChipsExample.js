import { Chips } from "@navikt/ds-react";
import { useState } from "react";

const ChipsExample = () => {
    const options = ["Norsk", "Dansk", "Svensk", "Tysk", "Spansk"];

    const [selected, setSelected] = useState(["Dansk", "Svensk"]);
    const [filter, setFilter] = useState(options);

    return (
        <div>
            <Chips className="mb-2">
                {options.map((c) => (
                    <Chips.Toggle
                        selected={selected.includes(c)}
                        key={c}
                        onClick={() =>
                            setSelected(
                                selected.includes(c)
                                    ? selected.filter((x) => x !== c)
                                    : [...selected, c]
                            )
                        }
                    >
                        {c}
                    </Chips.Toggle>
                ))}
            </Chips>
            <Chips>
                {filter.map((c) => (
                    <Chips.Removable
                        key={c}
                        onClick={() =>
                            setFilter((x) =>
                                x.length === 1 ? options : x.filter((y) => y !== c)
                            )
                        }
                    >
                        {c}
                    </Chips.Removable>
                ))}
            </Chips>
        </div>
    );
};

export default ChipsExample;