import * as React from "react";
import type { SVGProps } from "react";
const SvgNoStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.7}
      d="M20 36.667c9.2 0 16.667-7.467 16.667-16.667S29.2 3.333 20 3.333 3.333 10.8 3.333 20 10.8 36.667 20 36.667M31.5 8.333 8.167 31.667"
    />
  </svg>
);
export default SvgNoStyle;
