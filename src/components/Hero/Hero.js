import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am Pavlin <br />
          React Native Developer
        </SectionTitle>
        <SectionText>
        Enthusiastic learner who quickly grasps new concepts and technical skills.  Organized, goal oriented and analytical thinker. Hard-working, dedicated and efficacious worker.
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/Pavlin-React'}>My Github</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;