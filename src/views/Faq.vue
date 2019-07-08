<template>
  <div class="faq">
    <div class="splash-text">FAQ</div>
    <br>
    <div class="question">How long does a haircut take?</div>
    <div class="answer">About an hour.</div>
    <br>
    <div class="question">Another question?</div>
    <div class="answer">Another answer.</div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.faq {
  display: flex;
  // justify-content: center;
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
