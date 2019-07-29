<template>
  <div class="gallery-page">
    <div class="splash-text">Gallery</div>
    <div class="gallery">
      <thumb v-for="(image, index) in lunchData.gpGallery" :key="index" :img="image.imageUrl" :text="image.text"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lunchData() {
      return this.$store.state.lunchData;
    }
  },
}
</script>

<style lang="scss">
.gallery-page {
  display: flex;
  flex-direction: column;
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
