<template>
  <div class="gallery-thumb">
    <button :style="'background-image: url(' + img + ')'" @click="onThumbnailClick(img)">
      <span class="hover-text" v-text="text" v-if="text"/>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    text: String,
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
.gallery-thumb:hover {
  .hover-text {
    display: initial;
  }
}
.hover-text {
  display: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}
@media (max-width: 768px) {
  .gallery-thumb {
    padding: 5px;
  }
}
</style>
