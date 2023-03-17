import { keyframes, styled } from '../../../stitches.config';

export const Loading = () => {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="20" />
    </Svg>
  );
};

const strokeKeyframe = keyframes({
  '0%': { strokeDashoffset: '31.68', transform: 'rotate(0deg)' },
  '50%': { strokeDashoffset: '150.72', transform: 'rotate(540deg)' },
  '100%': { strokeDashoffset: '31.68', transform: 'rotate(1080deg)' },
});

const Svg = styled('svg', {
  circle: {
    fill: 'transparent',
    stroke: 'currentColor',
    strokeWidth: 6,
    strokeLinecap: 'round',
    strokeDasharray: 'calc(3.14 * 48)',
    transformOrigin: `24px 24px 0`,
    animation: `${strokeKeyframe} 2s linear infinite`,
  },
});

Loading.toString = () => `.${Svg.className}`;
