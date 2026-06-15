import { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Heading, HGrid } from "@navikt/ds-react";

function ColorSwatch({ cssVar, align }: { cssVar: string; align?: "end" }) {
    const ref = useRef<HTMLDivElement>(null);
    const [textColor, setTextColor] = useState("#000000");

    useEffect(() => {
        if (!ref.current) return;
        const bg = getComputedStyle(ref.current).backgroundColor;
        const match = bg.match(/\d+(\.\d+)?/g);
        if (match && match.length >= 3) {
            const alpha = match.length >= 4 ? Number(match[3]) : 1;
            if (alpha === 0) {
                setTextColor("#000000");
                return;
            }
            // Blend mot hvit bakgrunn for å få korrekt visuell luminans
            const r = Number(match[0]) * alpha + 255 * (1 - alpha);
            const g = Number(match[1]) * alpha + 255 * (1 - alpha);
            const b = Number(match[2]) * alpha + 255 * (1 - alpha);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setTextColor(luminance > 0.5 ? "#000000" : "#ffffff");
        }
    }, [cssVar]);

    return (
        <div ref={ref} style={{ backgroundColor: `var(${cssVar})`, padding: "4px 8px" }}>
            <span style={{ color: textColor, fontSize: "18px", textAlign: align }}>{cssVar}</span>
        </div>
    );
}

// Colors er ikke en komponent — det er en visning av CSS-variabler
// Se utkommentert kode under for implementasjon med --arb-* og --ax-* tokens

const meta = {
    title: "Arbeidsplassen/Colors",
    tags: [],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div>
            {[
                "neutral",
                "accent",
                "success",
                "warning",
                "danger",
                "info",
                "brand-peach",
                "brand-blue",
                "brand-magenta",
                "meta-lime",
                "meta-purple",
            ].map((color) => (
                <Box key={color} paddingBlock="space-16">
                    <Heading size="small" level="2">
                        {color}
                    </Heading>
                    {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, "100A", "200A", "300A", "400A"].map(
                        (depth) => (
                            <HGrid key={depth} columns="1fr 1fr" width="100%">
                                <ColorSwatch cssVar={`--arb-${color}-${depth}`} />
                                <ColorSwatch cssVar={`--ax-${color}-${depth}`} align="end" />
                            </HGrid>
                        ),
                    )}
                </Box>
            ))}
        </div>
    ),
};
