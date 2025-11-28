import Layout from "../examples/Layout";
import { BodyShort, Box, HGrid, HStack } from "@navikt/ds-react";

const ColorsExample = () => {
    return (
        <Layout title="Colors">
            <HGrid columns="1fr 1fr">
                <div>
                    {["gray", "green", "blue", "orange", "red", "info"].map((color) => (
                        <Box paddingBlock="4">
                            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, "100A", "200A", "300A", "400A"].map(
                                (depth) => (
                                    <HStack gap="4" justify="space-between">
                                        <BodyShort textColor="subtle">
                                            --arb-{color}-{depth}
                                        </BodyShort>
                                        <Box
                                            minWidth="220px"
                                            style={{ backgroundColor: `var(--arb-${color}-${depth})` }}
                                        >
                                            &nbsp;
                                        </Box>
                                    </HStack>
                                ),
                            )}
                        </Box>
                    ))}
                </div>
                <div>
                    {["neutral", "success", "accent", "warning", "danger", "info"].map((color) => (
                        <Box paddingBlock="4">
                            {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, "100A", "200A", "300A", "400A"].map(
                                (depth) => (
                                    <HStack gap="4">
                                        <Box
                                            minWidth="220px"
                                            style={{ backgroundColor: `var(--ax-${color}-${depth})` }}
                                        >
                                            &nbsp;
                                        </Box>
                                        <BodyShort textColor="subtle">
                                            --ax-{color}-{depth}
                                        </BodyShort>
                                    </HStack>
                                ),
                            )}
                        </Box>
                    ))}
                </div>
            </HGrid>
        </Layout>
    );
};

export default ColorsExample;
