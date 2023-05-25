import React, {useCallback} from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
              fullScreen: {
                  enable: true,
                  zIndex: -1
              },
              background: {
                  image: './assets/imgs/background/gradient02.jpg'
              },
              fpsLimit: 120,
              interactivity: {
                  events: {
                      onClick: {
                          enable: true,
                          mode: "push",
                      },
                      onHover: {
                          enable: true,
                          mode: "grab",
                      },
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: [{
                          b: 215,
                          g: 107,
                          r: 123,
                      },{
                          b: 255,
                          g: 207,
                          r: 255,
                      },{
                         b: 255,
                         g: 255,
                         r: 255,
                      },
                      ]
                  },
                  links: {
                      color:  {
                          value: {
                              b: 215,
                              g: 107,
                              r: 123,
                          },
                      },
                      distance: 200,
                      enable: true,
                      opacity: 0.3,
                      width: 1,
                  },
                  collisions: {
                      enable: true,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 2,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 800,
                      },
                      value: 50,
                  },
                  opacity: {
                      value: 0.5,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 5 },
                  },
              },
              detectRetina: true,
          }}
      />
    );
};

export default Particle;
