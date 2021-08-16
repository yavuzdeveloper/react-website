import React, { useState } from 'react'
import { MdRadioButtonChecked } from 'react-icons/md';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroBg, HeroContainer, VideoBg,
HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, 
} from './HeroElements';





const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src=
                {Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>I am a Frontend Developer</HeroH1>
                    <HeroP>
                       Sign up to start your software developer career
                       HTML, CSS, JavaScript
                    </HeroP>
              <HeroBtnWrapper>
                  <Button 
                    to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark="true"
                  >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
              </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
