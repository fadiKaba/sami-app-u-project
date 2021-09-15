<template>
  <transition name="slide">
    <Portfolio></Portfolio>
  </transition>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
  transition: 'slide',
  mounted: function(){
    this.setIsNavbarSlider(false);
    document.body.onscroll = function(){}
  },
  methods:{
    ...mapMutations(['setIsNavbarSlider'])
  }

}
</script>

<style lang="scss">

 .slide-enter-active {
  transition: all .4s ease-in-out;
}
.slide-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 0.4);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100vw);
}

</style>