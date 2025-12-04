import * as React from "react";
import Svg, {
  Circle,
  Path,
  Rect,
  Line,
  Polyline,
  Polygon,
  G,
  Text,
  TSpan,
  TextPath,
  Defs,
  ClipPath,
  Pattern,
  Mask,
  LinearGradient,
  RadialGradient,
  Stop,
  SvgProps,
} from "react-native-svg";
const SvgFail = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M1.667 16C1.667 8.084 8.084 1.667 16 1.667S30.333 8.084 30.333 16 23.916 30.333 16 30.333 1.667 23.916 1.667 16m13 5.333A1.33 1.33 0 0 1 15.994 20h.012a1.33 1.33 0 0 1 1.327 1.333 1.33 1.33 0 0 1-1.327 1.334h-.012a1.33 1.33 0 0 1-1.327-1.334m0-5.333a1.333 1.333 0 0 0 2.666 0v-5.333a1.333 1.333 0 0 0-2.666 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFail;
