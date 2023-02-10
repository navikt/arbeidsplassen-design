import Layout from "../examples/Layout";
import MinusCircleIcon from "../common/icons/feather/MinusCircleIcon";
import PlusCircleIcon from "../common/icons/feather/PlusCircleIcon";

const IconsExample = () => {
  return (
    <Layout title="Icons">
      <div className="flex">
        <MinusCircleIcon />
        <PlusCircleIcon />
      </div>
    </Layout>
  );
};

export default IconsExample;
