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
const SvgCancel = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M16.57 3.43a1.04 1.04 0 0 1 0 1.473L4.903 16.57a1.042 1.042 0 1 1-1.473-1.473L15.097 3.43a1.04 1.04 0 0 1 1.473 0"
      clipRule="evenodd"
    />
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M3.43 3.43a1.04 1.04 0 0 1 1.473 0L16.57 15.097a1.042 1.042 0 0 1-1.473 1.473L3.43 4.903a1.04 1.04 0 0 1 0-1.473"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCancel;
