import { Pagination } from "@navikt/ds-react";
import { useState } from "react";
import Layout from "../examples/Layout";

const PaginationExample = () => {
  const [pageState, setPageState] = useState(2);
  return (
    <Layout title="Pagination">
      <Pagination
        page={pageState}
        onPageChange={(x) => setPageState(x)}
        count={9}
        boundaryCount={1}
        siblingCount={1}
        prevNextTexts
      />
    </Layout>
  );
};

export default PaginationExample;
