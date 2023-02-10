import Layout from "../examples/Layout";
import MinusCircleIcon from "../packages/arbeidsplassen-react/Icons/feather/MinusCircleIcon";
import PlusCircleIcon from "../packages/arbeidsplassen-react/Icons/feather/PlusCircleIcon";
import UsersIcon from "../packages/arbeidsplassen-react/Icons/feather/UsersIcon";
import TrashIcon from "../packages/arbeidsplassen-react/Icons/feather/TrashIcon";

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
