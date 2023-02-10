import Layout from "../examples/Layout";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
  UsersIcon,
} from "../packages/arbeidsplassen-react";

const IconsExample = () => {
  return (
    <Layout title="Icons">
      <div className="flex">
        <MinusCircleIcon />
        <PlusCircleIcon />
        <UsersIcon />
        <TrashIcon />
      </div>
    </Layout>
  );
};

export default IconsExample;
