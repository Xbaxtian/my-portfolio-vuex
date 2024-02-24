<script setup lang="ts">
import type { Container } from 'tsparticles-engine'
// See tsParticles documentation for all available options
const options: any = {
  fullScreen: {
    enable: false,
    zIndex: -1
  },
  background: {
    color: {
      value: '#000'
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    move: {
      enable: true,
      "speed": 0.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    },
    number: {
      value: 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    retina_detect: true
  }
}
</script>

<template>
    <div class="hero__container">
      <NuxtParticles
          id="tsparticles"
          class="hero"
          :options="options"
      ></NuxtParticles>
      <div class="hero__content">
        <h1 class="hero__title">SEBASTIAN POSTIGO</h1>
        <h2 class="hero__subtitle">DATA ARCHITECT</h2>
      </div>
    </div>
</template>

<style>
.hero {
  height: 100%;
}

.hero__container {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.hero__content {
  color: white;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%,-50%);
  text-align: center;
}

.hero__title {
  font-size: 4rem;
  font-weight: 500;
  line-height: 1;
}

.hero__subtitle {
  font-size: 2rem;
  letter-spacing: 12px;
  line-height: 1;
}
</style>