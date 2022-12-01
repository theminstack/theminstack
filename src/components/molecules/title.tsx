import { styled } from '@minstack/styled';
import { type ReactNode } from 'react';

import { ParallaxFocus } from '../atoms/parallax-focus.js';
import { ParallaxLayer } from '../atoms/parallax-layer.js';
import { ParallaxRoot } from '../atoms/parallax-root.js';

type Props = {
  children?: ReactNode;
};

const TitleParallax = styled(ParallaxRoot)`
  font-weight: bold;

  ${ParallaxLayer}:nth-child(1) {
    color: hsl(210, 50%, 15%);
  }

  ${ParallaxLayer}:nth-child(2) {
    color: hsl(210, 50%, 30%);
  }

  &,
  ${ParallaxLayer} {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 7rem;
    font-size: 4rem;
  }
`;

const TitleFocus = styled(ParallaxFocus)`
  color: hsl(210, 100%, 75%);
  color: transparent;
  background-image: linear-gradient(0deg, hsl(0, 0%, 90%) 10%, hsl(210, 100%, 75%) 70%);
  background-size: 100% calc(100% - 2px);
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  overflow: hidden;
`;

const Title = ({ children }: Props) => {
  return (
    <TitleParallax>
      <ParallaxLayer yScale="-8rem" yOffset="-3rem" xOffset="-1rem">
        {children}
      </ParallaxLayer>
      <ParallaxLayer yScale="-4rem" yOffset="-1.5rem" xOffset="-0.5rem">
        {children}
      </ParallaxLayer>
      <TitleFocus>{children}</TitleFocus>
    </TitleParallax>
  );
};

export { Title };
