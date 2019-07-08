<template>
  <div class="gallery-thumb">
    <button :style="'background-image: url(' + img + ')'" @click="onThumbnailClick(img)"></button>
  </div>
</template>

<script>
export default {
  props: {
    img: String
  },
  methods: {
    onThumbnailClick(img) {
      this.$root.$children[0].onThumbnailClick(img);
    },
  },
}
</script>

<style scoped lang="scss">
.gallery-thumb {
  max-width: 275px;
  max-height: 500px;
  min-width: 215px;
  min-height: 130px;
  height: 155px;
  flex: 1 1 33%;
  height: 150px;
  margin: 7px;

}
.gallery-thumb > button {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  border: none;
  &:focus, &:hover {
    outline: none;
    opacity: 0.75;
  }
}
.gallery-thumb > button:hover, .gallery-thumb > button:focus {
  cursor: pointer;
}
@media (max-width: 768px) {
  .gallery-thumb {
    padding: 5px;
  }
}
</style>
