import { Heading, Pagination } from "@navikt/ds-react";
import React, { useState } from "react";
import Layout from "../examples/Layout";
import Code from "../examples/Code";

const PaginationExample = () => {
  const [pageState, setPageState] = useState(2);
  return (
    <Layout title="Pagination">
      <div className="mb-4">
        <Heading size="medium" level="2" spacing>
          With button text
        </Heading>
        <Pagination
          page={pageState}
          onPageChange={(x) => setPageState(x)}
          count={9}
          boundaryCount={1}
          siblingCount={1}
          prevNextTexts
        />
      </div>
      <Heading size="medium" level="2" spacing>
        Without button text
      </Heading>
      <Pagination
        page={pageState}
        onPageChange={(x) => setPageState(x)}
        count={9}
        boundaryCount={1}
        siblingCount={1}
      />
    </Layout>
  );
};

export default PaginationExample;
