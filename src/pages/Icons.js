import Layout from "../examples/Layout";
import MinusCircleIcon from "../common/icons/feather/MinusCircleIcon";
import PlusCircleIcon from "../common/icons/feather/PlusCircleIcon";
import UsersIcon from "../common/icons/feather/UsersIcon";
import TrashIcon from "../common/icons/feather/TrashIcon";

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
