import { Pagination } from "@navikt/ds-react";
import { useState } from "react";

const PaginationExample = () => {
    const [pageState, setPageState] = useState(2);
    return (
        <Pagination
            page={pageState}
            onPageChange={(x) => setPageState(x)}
            count={9}
            boundaryCount={1}
            siblingCount={1}
            prevNextTexts
        />
    );
};

export default PaginationExample;