<template>
  <div id="nav-fake">
    <div class="burger-menu" @click="showNavbar()">
        <span
        :class="
        ['burger-top',
        isNavbarS ? 'burger-top-transform' : 'burger-top-transform-reverse']">
        </span>
        <span
        :class="
        ['burger-bottom',
        isNavbarS ? 'burger-bottom-transform' : 'burger-bottom-transform-reverse']"></span>
    </div>
    <div class="linkedin-out">
        <svg id="Layer" enable-background="new 0 0 64 64" height="39.9" viewBox="0 0 64 64" width="39.9"
        xmlns="http://www.w3.org/2000/svg">
        <path class="svg-linked" d="m42 8h-20c-7.72 0-14 6.28-14 14v20c0 7.72 6.28 14 14 14h20c7.72 0 14-6.28 14-14v-20c0-7.72-6.28-14-14-14zm10 34c0 5.514-4.486 10-10 10h-20c-5.514 0-10-4.486-10-10v-20c0-5.514 4.486-10 10-10h20c5.514 0 10 4.486 10 10z"/>
        <path class="svg-linked" d="m24 27c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2s2-.896 2-2v-15c0-1.104-.896-2-2-2z"/>
        <path class="svg-linked" d="m38 29h-2c-.702 0-1.373.128-2 .35v-.35c0-1.104-.896-2-2-2s-2 .896-2 2v6 9c0 1.104.896 2 2 2s2-.896 2-2v-9c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v9c0 1.104.896 2 2 2s2-.896 2-2v-9c0-3.309-2.691-6-6-6z"/>
        <path class="svg-linked" d="m24 18c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
        </svg>
    </div>
  </div>
</template>

<script>

import { mapMutations, mapState} from 'vuex';

export default {
   data: function(){
      return{
        isNavbar: false
      }
   },
   computed: {
     ...mapState(['isNavbarS'])
   },
   methods: {
       ...mapMutations(['setIsNavbarS']),
       showNavbar: function(){
           this.isNavbar = !this.isNavbar;
           this.setIsNavbarS();
       }
   }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/colors.scss';

#nav-fake{
    position: fixed;
    top: 0;
    right: 0vw;
    height: 100vh;
    width: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    z-index: 2;
    .burger-menu{
        cursor: pointer;
        margin-top: 5vh;
        .burger-top, .burger-bottom{
            display: block;
            height: 4px;
            width: 35px;
            border-radius: 5px;
            margin-bottom: 5px;
            background-color: $color-secondary;
            &.humburger-light{
                background-color: $color-primary;
            }
        }
        .burger-top-transform{
            animation: menu-animation-top 1s ease forwards;
        }
        .burger-bottom-transform{
            animation: menu-animation-bottom 1s ease forwards;
        }
        .burger-top-transform-reverse{
            animation: menu-animation-top-reverse 1s ease forwards;
        }
        .burger-bottom-transform-reverse{
            animation: menu-animation-bottom-reverse 1s ease forwards;
        }
    }
    .linkedin-out{
      cursor: pointer;
      svg{
         margin-bottom: 5vh;
        .svg-linked{
            fill: $color-secondary;
        }
      }
   }
}

@keyframes menu-animation-top {
   from{
       transform: rotate(0);
   }
   to{
       transform: rotate(47deg)
   }
}

@keyframes menu-animation-bottom {
   from{
       transform: translateY(0) rotate(0);
   }
   to{
       transform: translateY(-8.5px) rotate(-47deg);
   }
}

@keyframes menu-animation-top-reverse {
   from{
       transform: rotate(50deg);
   }
   to{
       transform: rotate(0)
   }
}

@keyframes menu-animation-bottom-reverse {
   from{
       transform: translateY(-8.5px) rotate(-50deg);
   }
   to{
       transform: translateY(0) rotate(0);
   }
}


@media screen and (max-width:767px) {
 #nav-fake{
    right: 0vw;
    height: 100px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .burger-menu{
        margin-top: 0px;
        margin-left: 20px
    }
    .linkedin-out{
        margin-right: 20px;
      svg{
         margin-top: 20px;
        .svg-linked{
        }
      }
   }
 }
}

@media screen and (max-width:350px) {

}

</style>