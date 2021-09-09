<template>
  <div id="main-container">
      <div class="default-inner-container">
        <NavFake></NavFake>
        <Navbar></Navbar>
        <div class="container-fluid">
           <Nuxt />
        </div>
        <div v-if="!rendered" class="spinner-container">
         <div class="lds-hourglass"></div>
        </div>
      </div>
      <Texture></Texture>
  </div>
</template>

<script>

export default {
    data:function(){
        return{
         rendered: false
        }
    },
    mounted: function(){

        this.$nextTick(function () {
            this.rendered = true;
        })

   },
   computed: {

   },
   methods: {
   }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/colors.scss';

#main-container{
    position: relative;
    overflow: hidden;
    .default-inner-container{
     //   height: 100vh;
        width: 100vw;
        background-color: $color-primary;
        .container-fluid{
            padding-left: 10vw;
            padding-right: 10vh;
        }
    }
}

@media screen and (max-width:782px){
   #main-container{
    .default-inner-container{
        .container-fluid{
            padding-left: 0;
            padding-right: 0;
            text-align: center;
        }
    }
}
 }

</style>