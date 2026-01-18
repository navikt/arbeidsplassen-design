import Layout from "../examples/Layout";
import { BodyShort, Box, Heading, HGrid } from "@navikt/ds-react";

const ColorsExample = () => {
    return (
        <Layout title="Colors">
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
                    <Box paddingBlock="4">
                        <Heading size="small" level="2">
                            {color}
                        </Heading>
                        {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, "100A", "200A", "300A", "400A"].map(
                            (depth) => (
                                <HGrid columns="1fr 1fr" width="100%">
                                    <Box style={{ backgroundColor: `var(--arb-${color}-${depth})` }}>
                                        <BodyShort textColor="subtle" size="small">
                                            --arb-{color}-{depth}
                                        </BodyShort>
                                    </Box>
                                    <Box style={{ backgroundColor: `var(--ax-${color}-${depth})` }}>
                                        <BodyShort textColor="subtle" align="end" size="small">
                                            --ax-{color}-{depth}
                                        </BodyShort>
                                    </Box>
                                </HGrid>
                            ),
                        )}
                    </Box>
                ))}
            </div>
        </Layout>
    );
};

export default ColorsExample;
