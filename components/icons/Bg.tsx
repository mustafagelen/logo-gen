import * as React from "react";
import Svg, {
  Path,
  G,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
  SvgProps,
  Filter,
  FeGaussianBlur,
} from "react-native-svg";

const SvgBg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={390}
    height={844}
    fill="none"
    viewBox="0 0 390 844"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="#09090B" d="M0 0h390v844H0z" />
      <G filter="url(#b)" opacity={0.8}>
        <Path
          stroke="url(#c)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={50}
          d="M322.769 148 121.552 271.729c-55.067 33.861-49.313 115.67 9.952 141.489l142.551 62.104c55.762 24.293 65.09 99.466 16.956 136.651L81.277 774"
        />
      </G>
    </G>

    <Defs>
      <Filter
        id="b"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <FeGaussianBlur
          in="SourceGraphic"
          stdDeviation="105"
          result="blur"
        />
      </Filter>
      <LinearGradient
        id="c"
        x1={194.5}
        x2={194.5}
        y1={774}
        y2={148}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.185} stopColor="#C26CFF" />
        <Stop offset={1} stopColor="#1C55FF" />
      </LinearGradient>

      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h390v844H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgBg;