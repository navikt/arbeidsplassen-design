import { Search } from "@navikt/ds-react";

const SearchExample = () => {
  return (
    <form>
      <div className="mb-2">
        <Search
          label="Søk etter ledige stillinger"
          variant="primary"
          hideLabel={false}
        />
      </div>

      <Search label="Søk alle NAV sine sider" variant="simple" />
    </form>
  );
};

export default SearchExample;
