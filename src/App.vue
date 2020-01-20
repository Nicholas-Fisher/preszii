<template>
  <div id="app">
    <div id="nav">
      <div class="nav-inner">
        <img class="logo" alt="logo" src="./assets/images/logo-min.png"/>
        <div class="nav-links not-on-mobile">
          <router-link to="/">Home</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/#services">Services</router-link>
        </div>
      </div>
    </div>
    <router-view class="router-view"/>
    <div class="footer">&copy; Preszii {{new Date().getFullYear()}}</div>
    <div class="nav-control mobile-only" :class="{'full': isFullNav}">
      <div class="nav-dimmer" @click="isFullNav = false"/>
      <div class="nav-touchable">
        <button class="nav-btn" @click="isFullNav = !isFullNav">
          <div class="label" v-show="!isFullNav">
            <fa :icon="['far', 'bars']"/>
          </div>
          <div class="label" v-show="isFullNav">
            <fa :icon="['far', 'times']"/>
          </div>
        </button>
        <router-link to="/" class="nav-btn"><div class="label"><span>Home</span></div></router-link>
        <router-link to="/gallery" class="nav-btn"><div class="label"><span>Gallery</span></div></router-link>
        <router-link to="/faq" class="nav-btn"><div class="label"><span>FAQ</span></div></router-link>
        <router-link to="/#services" class="nav-btn"><div class="label"><span>Services</span></div></router-link>
      </div>
    </div>
    <div class="image-viewer-container" v-show="imageViewerVisible" @click="imageViewerVisible = false">
      <p class="close-text">Click to close.</p>
      <div class="image-viewer">
        <div class="image-viewer-image" :style="'background-image: url(' + currImage + ')'"></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      isFullNav: false,
      imageViewerVisible: false,
      currImage: '',
    }
  },
  watch: {
    $route(to, from) {
      this.imageViewerVisible = false;
      this.$data.isFullNav = false;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  },
  methods: {
    onThumbnailClick(img) {
      this.$data.imageViewerVisible = true;
      this.$data.currImage = img;
    },
  },
}
</script>
<style lang="scss">

// Normalize:
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
@import './scss/_globals.scss';
p {
  margin: 0;
}
ul {
  margin: 0;
}
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: regular;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.close-text {
  text-align: center;
  color: gold;
}
.footer {
  height: $nav-height;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.router-view {
  position: relative;
  top: $nav-height;
  margin-bottom:  $nav-height;
	min-height: calc(100vh - #{$nav-height*2});
  width: 100%;
}
.nav-control {
  z-index: $nav-z;
  bottom: -1*(($nav-number-of-buttons)*$nav-button-height);
  transition: all 0.1s ease-in;
  width: 100%;
  position: fixed;
  left: 0;
  border-top: 1px solid $theme-color1;
  .nav-dimmer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: none;
  }
  &.full {
    bottom: 0;
    .nav-dimmer {
      display: initial;
      background-color: $dimmer-color;
    }
  }
  .nav-touchable {
    position: relative;
  }
  .nav-btn {
    border: none;
    width: 100%;
    text-decoration: none;
    height: $nav-button-height;
    background-color: #000;
    color: #fff;
    @include flex-center();
    &:focus {
      outline: none;
    }
    .label > span {
      text-align: center;
    }
  }
}
#nav {
	position: fixed;
  z-index: 100;
	width: 100%;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
  top: 0;
  left: 0;
  background-color: #000;
}
.nav-inner {
	width: 100%;
	max-width: $max-width;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $nav-height;
	padding: 0 30px;
  .logo {
    // margin-top: -8px;
    height: 30px;
    flex: 0 0 auto;
  }
  .nav-links {
    height: 100%;
  }
  a {
    color: #fff;
    text-transform: uppercase;
    font-family: title;
    padding: 0 20px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    &:hover {
      opacity: 0.65;
    }
  }
}
@media #{$mobile} {
	#nav {
    position: initial;
    padding: 0;
    box-shadow: none;
  }
  .nav-inner {
    justify-content: center;
    padding: 0;
  }
	.router-view {
		position: initial;
		top: 0;
		margin-bottom:  0;
		min-height: 0;
	}
}
.image-viewer-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.image-viewer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 80vh;
  width: 80vw;
}
@media (max-width: 768px) {
  .image-viewer {
    height: 100vh;
    width: 100vw;
  }
}
.image-viewer .close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
.image-viewer-image {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
