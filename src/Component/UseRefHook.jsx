import { useEffect } from "react";
import { useRef } from "react";

const UseRefHook = () => {
  const useRefValue = useRef(null);

  useEffect(() => {
    console.log(useRefValue.current, "Input");
    useRefValue.current.focus();
  });
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter the Name"
          name="name"
          ref={useRefValue}
        />
      </form>
    </>
  );
};

export default UseRefHook;
