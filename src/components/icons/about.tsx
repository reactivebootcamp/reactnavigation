import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function About({color, width, height, style}: SvgProps) {
  return (
    <Svg
      style={style}
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}>
      <Path d="M319-250h322v-60H319v60zm0-170h322v-60H319v60zM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220zm331-554v-186H220v680h520v-494H551zM220-820v186-186 680-680z" />
    </Svg>
  );
}

export default About;
