<template>
  <div class="home">
    <div class="carousel">
      <div class="splash-text">Quality grooming service at your convenience</div>
      <div class="siema-container">
        <div id="siema">
          <div>
            <div class="carousel-text img-1"><div></div></div>
          </div>
          <div>
            <div class="carousel-text img-2"><div></div></div>
          </div>
          <div>
            <div class="carousel-text img-3"><div></div></div>
          </div>
        </div>
      </div>
      <div class="carousel-btns">
        <button class="carousel-btn" @click="mySiema.prev()">
          <fa :icon="['far', 'chevron-left']"/>
        </button>
        <button class="carousel-btn" @click="mySiema.next()">
          <fa :icon="['far', 'chevron-right']"/>
        </button>
      </div>
    </div>
    <div class="reasons block-section">
      <div class="reason-block">
        <div class="big">
          <fa :icon="['far', 'book']"/>
          <span>Book</span>
        </div>
        <div class="small">Select the time and place. Select the time and place. Select the time and.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <fa :icon="['far', 'map-marker']"/>
          <span>Location</span>
        </div>
        <div class="small">We bring all the tools and come to you, it's all about convenience.</div>
      </div>
      <div class="reason-block">
        <div class="big">
          <fa :icon="['far', 'handshake']"/>
          <span>Payment</span>
        </div>
        <div class="small">We clean up then you can pay however you want.</div>
      </div>
    </div>
    <div id="about" class="about block-section">
      <div class="title">About Us</div>
      <div class="inner">
        <div class="text">Fresh. Edgy. Flawless. The Groomed Society evolved out of grooming specialist Mikka Gia’s vision for a relaxed, comfortable space where consistent quality and a top shelf experience can always be counted on. Run out of a clean private loft studio, cuts and shaves at the Groomed Society are by appointment only. Whether you’re looking for a style that is clean, classic, or trendsetting, you can depend on the Groomed Society to stay ahead of the curve with the perfect cut.</div>
      </div>
    </div>
    <div id="services" class="services block-section">
      <div class="title">Services</div>
      <div class="inner">
        <div class="service-block">
          <div class="title">Standard</div>
          <div class="cost">$40</div>
          <div class="description">Haircut</div>
        </div>
        <div class="service-block">
          <div class="title">Prezsiidential</div>
          <div class="cost">$60</div>
          <div class="description">Haircut and beard trim</div>
        </div>
        <div class="service-block">
          <div class="title">Blade Work</div>
          <div class="cost">$5</div>
        </div>
        <div class="service-block">
          <div class="title">Eyebrows</div>
          <div class="cost">$10</div>
        </div>
        <div class="service-block">
          <div class="title">Custom Design</div>
          <div class="cost">$15+</div>
        </div>
      </div>
      <div class="service-area">
        <div class="title">The area we currently serve (click to expand).</div>
        <thumb :img="mapImage"></thumb>
      </div>
    </div>
    <div class="contact block-section">
      <div class="title">Contact</div>
      <div class="inner">
        <a class="std-btn" href="tel:1-647-574-1083"><fa :icon="['far', 'phone']"/>(647) 574 1083</a>
        <a class="std-btn" href="doc.gashawn@gmail.com"><fa :icon="['far', 'envelope']"/>doc.gashawn@gmail.com</a>
        <!-- <a target="_blank" class="std-btn" href="https://www.instagram.com/el_preszii"><fa :icon="['fab', 'twitter']"/><span>@el_preszii</span></a> -->
        <a target="_blank" class="std-btn" href="https://www.instagram.com/el_preszii"><fa :icon="['fab', 'instagram']"/><span>@el_preszii</span></a>
        <a target="_blank" class="std-btn" href="https://www.facebook.com/presziithebarber"><fa :icon="['fab', 'facebook']"/><span>/presziithebarber</span></a>
      </div>
    </div>
    <div class="testimonials block-section">
      <div class="title">Testimonials</div>
      <div class="testimonial-block">
        <thumb :img="haircutImage4"></thumb>
        <div class="right-side">
          <div class="quote"><fa :icon="['far', 'quote-left']"/><span>I'd been going out to barbershops for years but you can't beat the convenience of a barber that comes to you, esspecially on those cold days. Also, Gashawn is reliable, punctual, and an artist; look at this fade!</span></div>
          <div class="person">- Nicholas</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Siema from "siema";
import haircutImage4 from '../assets/images/cuts/4-min.jpg'
import mapImage from '../assets/images/map-light-min.png'
export default {
  data() {
    return {
      haircutImage4,
      mapImage,
      mySiema: {},
    };
  },
  mounted() {
    this.$data.mySiema = new Siema({
      selector: "#siema",
      duration: 200,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      // draggable: true,
      // multipleDrag: true,
      threshold: 20,
      loop: true,
      onInit: () => {
        return;
      },
      onChange: () => {
        return;
      }
    });
  }
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
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #siema {
    width: calc(100vw - 50px);
    .carousel-text {
      height: calc(100vh - 500px);
      min-height: 400px;
      -moz-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
      -o-filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
      -webkit-filter: grayscale(100%);
      filter: gray;
      filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      > div {
        background-color: rgba(#222, 0.25);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        font-family: logo;
        font-size: 30px;
        padding-top: 30px;
      }
    }
    .img-1 {
      background-image: url("../assets/images/cuts/1-min.jpg");
    }
    .img-2 {
      background-image: url("../assets/images/cuts/2-min.jpg");
    }
    .img-3 {
      background-image: url("../assets/images/cuts/3-min.jpg");
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
  margin: 20px;
  padding: 20px;
  background-color: #000;
  .title {
    font-size: 25px;
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
    font-size: 25px;
  }
  img {
    display: inline-block;
  }
}
</style>
