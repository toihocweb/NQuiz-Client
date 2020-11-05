import React from "react";
import Particles from "react-tsparticles";

interface ParticlesContainerProps {
  bgColor: string;
  particlesColor: string;
}

const ParticlesContainer: React.FC<ParticlesContainerProps> = ({
  bgColor,
  particlesColor,
}) => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: bgColor,
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                force: 60,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: particlesColor,
          },
          links: {
            color: {
              value: particlesColor,
            },
            distance: 150,
            enable: true,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              minimumValue: 0.1,
              speed: 1,
            },
          },
          shape: {
            options: {
              image: [
                {
                  src: "/images/icons/nquiz_particle.png",
                  width: 64,
                  height: 64,
                },
                {
                  src: "/images/icons/nquiz_text.png",
                  width: 128,
                  height: 128,
                },
              ],
              polygon: {
                nb_sides: 5,
              },
              star: {
                nb_sides: 5,
              },
            },
            type: "image",
          },
          size: {
            value: 12,
            animation: {
              minimumValue: 10,
              speed: 10,
            },
          },
          stroke: {
            width: 1,
            color: {
              value: particlesColor,
              animation: {
                enable: false,
                speed: 1,
                sync: true,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
