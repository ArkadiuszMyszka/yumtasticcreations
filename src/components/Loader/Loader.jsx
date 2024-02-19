import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <InfinitySpin width="400" color="#8baa36" />
    </div>
  );
};

export default Loader;
