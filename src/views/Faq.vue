<template>
  <div class="faq">
    <div class="splash-text">FAQ</div>
    <div class="qa-container">
      <div v-for="(qa, index) in lunchData.faq" :key="index">
        <br>
        <div class="question">{{qa.question}}</div>
        <div class="answer">{{qa.answer}}</div>
      </div>
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
.faq {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.faq > .splash-text {
  margin-bottom: 30px;
}
.question {
  font-size: 18px;
  opacity: 0.75;
  margin-bottom: 15px;
}
.answer {
  font-size: 20px;
  margin-bottom: 25px;
}
</style>
