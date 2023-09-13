import { Search } from "@navikt/ds-react";
import Layout from "../examples/Layout";

const SearchExample = () => {
  return (
    <Layout title="Search">
      <form>
        <div className="mb-8">
          <Search
            label="Søk etter ledige stillinger"
            variant="primary"
            hideLabel={false}
          />
        </div>

        <Search label="Søk alle NAV sine sider" variant="simple" />
      </form>
    </Layout>
  );
};

export default SearchExample;
