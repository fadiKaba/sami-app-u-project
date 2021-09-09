<template>
   <div id="portfolio">
      <div class="portfolio-header">
         <span>portfolio</span>
      </div>
      <div class="portfolio-body">
         <div class="col-md-3 showcase">
            <ul>
                <li class="link-or">
                    <NuxtLink to="#"><span></span>Ui-Design</NuxtLink>
                </li>
                <li class="link-or">
                    <NuxtLink to="#"><span></span>Print</NuxtLink>
                </li>
                <li class="link-or">
                    <NuxtLink to="#"><span></span>Video Animation</NuxtLink>
                </li>
                <li class="link-or">
                    <NuxtLink to="#"><span></span>Illustration</NuxtLink>
                </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script>

import { mapState } from 'vuex';
import anime from '@/node_modules/animejs/lib/anime';

export default {
   mounted: function(){
      this.runnAn();
   },
   computed: {
      ...mapState(['layoutState'])
   },
   methods: {
     runnAn: function(){
        anime({
         targets: '.link-or',
         translateX: '-60vw',
         easing: 'easeInElastic(1, .6)',
         delay: anime.stagger(100),
         direction: 'reverse'

        // direction: 'reverse',
         });

         anime({
         targets: '.elastic-easing-demo .line:nth-child(2) .el',
         translateX: 270,
         easing: 'easeOutElastic(1, .6)'
         });

         anime({
         targets: '.elastic-easing-demo .line:nth-child(3) .el',
         translateX: 270,
         easing: 'easeInOutElastic(1, .6)'
         });

         anime({
         targets: '.elastic-easing-demo .line:nth-child(4) .el',
         translateX: 270,
         easing: 'easeOutInElastic(1, .6)'
         });
     }
   }


}
</script>

<style lang="scss">

@import '@/assets/scss/colors.scss';

#portfolio{
   height: 100%;
   .portfolio-header{
      font-family: 'din-bold', Arial, Helvetica, sans-serif;
      padding-top: 5vh;
   }
   .portfolio-body{
      height: 100vh;
      padding-bottom: 20vh;
      .showcase{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         white-space: nowrap;
         ul{
             z-index: 3;
            li{
                a{
                    font-family: 'kate', Arial, Helvetica, sans-serif;
                    color: $color-secondary;
                    transition: 0.3s;
                    font-size: 100px;
                     line-height: 9rem;
                    position: relative;
                    span{
                       position: absolute;
                        top:60%;
                        left:0;
                        height: 10%;
                        width: 0%;
                        background-color: $color-secondary;
                        transition: width 0.5s;
                    }
                    &:hover span{
                            width: 110%;
                    }
                    &.link-light{
                        span{
                            background-color: $color-primary;
                        }
                        color: $color-primary;
                    }
                }
            }
        }
      }
   }
}

@media screen and (max-width:1680px){
   #portfolio{
      .portfolio-body{
         .showcase{
            ul{
                li{
                    a{
                      font-size: 80px;
                      line-height: 8rem;
                    }
                }
            }
         }
      }
   }
}

@media screen and (max-width:1440px){
   #portfolio{
      .portfolio-body{
         .showcase{
            ul{
                li{
                    a{
                      font-size: 70px;
                      line-height: 6.7rem;
                    }
                }
            }
         }
      }
   }
}


@media screen and (max-width:1100px){
   #portfolio{
      .portfolio-body{
         .showcase{
            ul{
                li{
                    a{
                      font-size: 65px;
                      line-height: 6rem;
                    }
                }
            }
         }
      }
   }
}

@media screen and (max-width:1024px){
   #portfolio{
      .portfolio-body{
         // padding-bottom: 10vh;
         padding-left: 10px;
         .showcase{
            ul{
                li{
                    a{
                      font-size: 60px;
                      line-height: 5.5rem;
                    }
                }
            }
         }
      }
   }
}

@media screen and (max-width:767px) {
    #portfolio{
       .portfolio-header{
         display: none;
      }
      .portfolio-body{
          padding-bottom: 200px;
         .showcase{
            ul{
                li{
                    a{
                      font-size: 30px;
                      line-height: 3.5rem;
                    }
                }
            }
         }
      }
   }
}

@media screen and (max-width:350px) {
    #portfolio{
      .portfolio-body{
          padding-bottom: 200px;
         .showcase{
            ul{
                li{
                    a{
                      font-size: 25px;
                      line-height: 2.8rem;
                    }
                }
            }
         }
      }
   }
}




</style>