<template>
    <transition name="slide">
        <div>
            <About></About>
        </div>
    </transition>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  transition: 'slide',
  methods: {
    ...mapMutations(['setIsNavbarSlider'])
  },
  computed: {
    ...mapState(['isNavbarSlider'])
  }
}
</script>

<style lang="scss" scoped>

.slide-enter-active {
  transition: all .3s ease;
}
.slide-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100vw);
}
</style>
