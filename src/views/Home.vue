<template>
  <div class="home">
    <div class="splash-text">{{lunchData.mpIntroText.text}}</div>
    <div class="carousel">
      <div class="siema-container">
        <div id="siema" @click="stopSiema">
          <div v-for="(image, index) in lunchData.mpCarousel" :key="index">
            <div class="carousel-img" :style="`background-image: url(${image.imageUrl});`">
              <div class="carousel-text" v-text="image.text"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reasons block-section">
      <div class="reason-block">
        <div class="big">
          <fa :icon="['far', 'book']"/>
          <span>Book</span>
        </div>
        <div class="small">{{lunchData.mpBookText.text}}.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <fa :icon="['far', 'map-marker']"/>
          <span>Location</span>
        </div>
        <div class="small">{{lunchData.mpLocationText.text}}.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <fa :icon="['far', 'handshake']"/>
          <span>Payment</span>
        </div>
        <div class="small">{{lunchData.mpPaymentText.text}}</div>
      </div>
    </div>
    <div id="about" class="about block-section">
      <div class="title">About Us</div>
      <div class="inner">
        <div class="text" v-html="lunchData.mpAboutUsText.text"/>
      </div>
    </div>
    <div id="services" class="services block-section">
      <div class="title">Services</div>
      <div class="inner">
        <div class="service-block" v-for="(pli, index) in lunchData.mpPriceList" :key="index">
          <div class="title">{{pli.name}}</div>
          <div class="cost">{{pli.price}}</div>
          <div class="description">{{pli.description}}</div>
        </div>
      </div>
      <div class="service-area">
        <div class="title">{{lunchData.mpAreaWeServePic.text}}</div>
        <thumb :img="lunchData.mpAreaWeServePic.imageUrl"></thumb>
      </div>
    </div>
    <div class="contact block-section">
      <div class="title">Contact</div>
      <div class="inner">
        <a v-if="lunchData.ciPhone.text" class="std-btn" :href="`tel:1${parseInt(lunchData.ciPhone.text)}`"><fa :icon="['far', 'phone']"/>{{lunchData.ciPhone.text}}</a>
        <a v-if="lunchData.ciEmail.text" class="std-btn" :href="lunchData.ciEmail.text"><fa :icon="['far', 'envelope']"/>{{lunchData.ciEmail.text}}</a>
        <a v-if="lunchData.ciTwitter.text" target="_blank" class="std-btn" :href="`https://www.instagram.com/${lunchData.ciTwitter.text}`"><fa :icon="['fab', 'twitter']"/><span>@{{lunchData.ciTwitter.text}}</span></a>
        <a v-if="lunchData.ciInstagram.text" target="_blank" class="std-btn" :href="`https://www.instagram.com/${lunchData.ciInstagram.text}`"><fa :icon="['fab', 'instagram']"/><span>@{{lunchData.ciInstagram.text}}</span></a>
        <a v-if="lunchData.ciFacebook.text" target="_blank" class="std-btn" :href="`https://www.facebook.com/${lunchData.ciFacebook.text}`"><fa :icon="['fab', 'facebook']"/><span>/{{lunchData.ciFacebook.text}}</span></a>
      </div>
    </div>
    <div class="testimonials block-section">
      <div class="title">Testimonials</div>
      <div class="testimonial-block" v-for="(t, index) in lunchData.mpTestimonials" :key="index">
        <thumb :img="t.imageUrl"></thumb>
        <div class="right-side">
          <div class="quote"><fa :icon="['far', 'quote-left']"/><span>{{t.quote}}</span></div>
          <div class="person">- {{t.quotee}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Siema from "siema";
export default {
  data() {
    return {
      mySiema: {},
      siemaInterval: 0,
    };
  },
  mounted() {
    this.$data.mySiema = new Siema({
      selector: "#siema",
      duration: 400,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      threshold: 20,
      loop: true,
      onInit: () => {
        this.$data.siemaInterval = setInterval(() => {
          this.$data.mySiema.next();
        }, 3800)
      },
      onChange: () => {
        return;
      }
    });
  },
  methods: {
    stopSiema() {
      clearInterval(this.$data.siemaInterval);
    }
  },
  computed: {
    lunchData() {
      return this.$store.state.lunchData;
    }
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
}
.block-section {
  @include block-margins();
  > .title, > .inner > .title {
    font-family: title;
    text-transform: uppercase;
    font-size: 40px;
    margin-bottom: 30px;
    font-weight: bold;
  }
}
.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  .testimonial-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    // flex-direction: row;
    .right-side {
      margin: 0 10px;
      max-width: 700px;
      .quote {
        font-size: 18px;
        font-style: italic;
        max-width: 400px;
        svg {
          color: $theme-color1;
          margin-right: 10px;
        }
      }
      .person {
        margin-top: 20px;
        opacity: 0.75;
      }
    }
  }
}
.carousel-btn {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  height: 70px;
  width: 100px;
  // border: 1px solid red;
  &:focus,
  &:hover {
    opacity: 0.5;
  }
}
.reasons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // width: 100%;
  background-color: #000;
}
.reason-block {
  max-width: 290px;
  margin: 20px 50px;
  .big {
    font-size: 25px;
    font-family: title;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    svg {
      color: $theme-color1;
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
  .small {
    line-height: 30px;
    text-align: center;
  }
}
.about {
  background-color: #fff;
  color: #555;
  font-weight: bold;
  line-height: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    color: $theme-color1;
  }
  .inner {
    max-width: 800px;
  }
}
.contact {
  width: 100%;
  background-color: #ddd;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    color: #000;
  }
  .inner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
.services {
  width: 100%;
  background-color: #333;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  > .title {
    color: #fff;
  }
  > .inner {
    width: auto;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.service-block {
  min-width: 240px;
  max-width: 500px;
  margin: 20px;
  padding: 20px;
  background-color: #000;
  .title {
    font-size: 25px;
    @media #{$mobile} {
      font-size: 20px;
    }
    font-family: title;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $theme-color1;
  }
  .cost {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .description {
    opacity: 0.75;
  }
}
.service-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .title {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 22px;
    @media #{$mobile} {
      font-size: 18px;
    }
  }
  img {
    display: inline-block;
  }
}
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #siema {
    width: 100vw;
    max-width: 1200px;
    .carousel-img {
      height: 600px;
      @media #{$mobile} {
        height: 300px;
      }
      -moz-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
      -o-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
      -webkit-filter: grayscale(100%);
      filter: gray;
      filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      > .carousel-text {
        background-color: rgba(#222, 0.25);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: logo;
        font-size: 30px;
        padding: 30px 0;
        @media #{$mobile} {
          font-size: 20px;
        }
      }
    }
  }
  .siema-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.carousel-btn {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  height: 70px;
  width: 100px;
  // border: 1px solid red;
  &:focus,
  &:hover {
    opacity: 0.5;
  }
}
</style>
