<template>
<div>
  <transition name="slide">
      <Home></Home>
  </transition>
  <Contact></Contact>
</div>

</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  transition: 'slide',
  beforeMount: function(){

  },
  mounted: function() {
    let vm = this;
    setTimeout(function(){
     screen.width >= 767 ? vm.scrollDetector() : '';
      console.log(screen.width)
    }, 300)

  },
  updated: function(){

  },
  methods: {
    ...mapMutations(['setIsNavbarSlider']),
    scrollDetector: function(){
      let timer = null;
      let vm = this
      document.body.onscroll = function (){
        if(timer != null){
          clearTimeout(timer)
        }
        timer = setTimeout(function (){
          if(window.scrollY > (document.body.scrollHeight /4)){
            window.scrollTo(0, document.body.scrollHeight);
          }else{
            window.scrollTo(0, 0);
          }
        }, 200);
      }
    },
  },
  computed: {
    ...mapState(['isNavbarSlider'])
  },
  beforeDestroy: function(){
   let vm = this;
   window.removeEventListener('scroll', function(){vm.handleScroll()})
  },
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/colors.scss';

.slide-enter-active {
  transition: all .6s ease-out;
}
.slide-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to{
  transform: translateX(100vw);
}
</style>
