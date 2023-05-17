import { forwardRef, useRef, useEffect } from "react";

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

export const UseCompRef = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};
