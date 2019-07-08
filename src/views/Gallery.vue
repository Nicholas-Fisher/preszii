<template>
  <div class="gallery-page">
    <div class="splash-text">Gallery</div>
    <div class="gallery">
      <thumb :img="haircutImage1"></thumb>
      <thumb :img="haircutImage2"></thumb>
      <thumb :img="haircutImage3"></thumb>
      <thumb :img="haircutImage4"></thumb>
      <thumb :img="haircutImage5"></thumb>
      <thumb :img="haircutImage6"></thumb>
      <thumb :img="haircutImage7"></thumb>
      <thumb :img="haircutImage8"></thumb>
    </div>
  </div>
</template>

<script>
import haircutImage1 from '../assets/images/cuts/1-min.jpg'
import haircutImage2 from '../assets/images/cuts/2-min.jpg'
import haircutImage3 from '../assets/images/cuts/3-min.jpg'
import haircutImage4 from '../assets/images/cuts/4-min.jpg'
import haircutImage5 from '../assets/images/cuts/5-min.jpg'
import haircutImage6 from '../assets/images/cuts/6-min.jpg'
import haircutImage7 from '../assets/images/cuts/7-min.jpg'
import haircutImage8 from '../assets/images/cuts/8-min.jpg'

export default {
  data() {
    return {
      haircutImage1,
      haircutImage2,
      haircutImage3,
      haircutImage4,
      haircutImage5,
      haircutImage6,
      haircutImage7,
      haircutImage8,
    }
  },

}
</script>

<style lang="scss">
.gallery-page {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
}
.gallery-page > .splash-text {
  margin-bottom: 30px;
}
.gallery {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
