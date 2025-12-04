module.exports = {
  native: true,
  typescript: true,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            removeUnknownsAndDefaults: false,
            removeUselessStrokeAndFill: false
          }
        }
      }
    ]
  },
  template: ({ componentName, jsx }, { tpl }) => {
    return tpl`
      import * as React from 'react';
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
        SvgProps 
      } from 'react-native-svg';
      
      const ${componentName} = (props: SvgProps) => ${jsx};
      
      export default ${componentName};
    `;
  }
};
