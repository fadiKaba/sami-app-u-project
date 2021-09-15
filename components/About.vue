<template>
   <div id="about">
      <div class="img-container"></div>
      <div class="about-header">
         <span>about</span>
      </div>
      <div class="about-body">
         <div class="showcase">
             <div class="row">
                <div class="col-md-6 letters" id="about-letters">
                    <div class="about-left-title">
                       <h3 class="d" v-if="design">
                        <span class="left">D</span>
                        <span class="right">e</span>
                        <span class="left">s</span>
                        <span class="right">i</span>
                        <span class="left">g</span>
                        <span class="right">n</span>
                        </h3>
                        <h3 class="m" v-else>
                            <span class="left">M</span>
                            <span class="right">a</span>
                            <span class="left">t</span>
                            <span class="right">e</span>
                            <span class="left">r</span>
                            <span class="right">s</span>
                        </h3>
                    </div>

                </div>
                <div class="col-md-6 paragraphs">
                    <h3> <span class="i-chose">I chose</span> <br /> <span class="i-chose">to be an</span> <span class="i-chose">artist</span> <br /></h3>
                    <p>I discovered I really suck at <br /> math! Also because my <br /> parents wanted me to be <br />
                    a doctor, the old famous <br /> rebellion spirit right! That<br /> being said I was smitten <br />
                    by design.
                    </p>
                    <p>I found myself striving for <br />the creative expression art<br /> provides. I studied Fine <br />Art at first,
                        which led me to be<br /> an illustrator, a discipline<br /> that merges design and<br /> drawing simultaneously.<br />
                        Moving on I gathered a great <br /> amount of experience and <br />
                        a strong base to apply to <br />several other disciplines<br /> including Graphic/UI Design <br />and Animation.
                    </p>
                    <p>Currently working at Vshift, <br />
                    a digital strategy, design, <br />
                    and technology agency for <br />enterprise-scale brands in <br />regulated industries.<br />
                    Vshift combines a vision and <br />proved clarity in providing<br /> highly functional solutions <br />in a creative design package.
                    </p>
                </div>
             </div>
         </div>
      </div>
   </div>
</template>

<script>

import anime from '@/node_modules/animejs/lib/anime';
import { mapState } from 'vuex';

export default {
    data: function(){
        return{
         design: true
        }
    },
    mounted: function(){
      this.runTitleAnim();
    },
    methods: {
      runTitleAnim: function(){
         anime({
            targets: '.about-header span',
            translateX: 270,
            direction: 'reverse',
            loop: true,
            delay: anime.stagger(100, {start: 500})
            });
      }
    },
    computed: {
        ...mapState(['layoutState'])
    }

}
</script>

<style lang="scss">

@import '@/assets/scss/colors.scss';

#about{
  // height: 200vh;
   width: 100%;
   position: relative;
   .img-container{
      position: absolute;
      top: -9vh;
    //  left: 20vw;
      left: 28vw;
      width: 608px;
      height: 788px;
      overflow: hidden;
      border-radius: 0 0 0 565px;
      background-image: url('@/assets/imgs/sami_photo.png');
      background-color: $color-primary;
      background-blend-mode: multiply;
      background-size: cover;
      background-position: center;
      z-index: 1;
        img{
            width: 100%;
        }
    }
   .about-header{
      font-family: 'din-bold', Arial, Helvetica, sans-serif;
      padding-top: 5vh;
   }
   .about-body{
      height: 100%;
      padding-bottom: 20vh;
      .showcase{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         white-space: nowrap;
         .letters{
             padding-top: 55vh;
             padding-left: 17vw;
             .about-left-title{
                 font-family: 'kate';
               .d, .m{
                  font-size: 400px;
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  .left{
                    justify-self: end;
                  }
                  .right{
                     justify-self: start;
                  }
               }
               .m{

               }
             }
         }
         .paragraphs{
             z-index: 2;
             padding-top: 15vh;
             padding-left: 12vh;
             color: $color-secondary;
             h3{
                 font-family: 'kate', Arial, Helvetica, sans-serif;
                 font-size: 75px;
                 word-break: break-all;
                 margin-bottom: 8vh;
                 word-spacing: 0.1vh;
                 letter-spacing: 0.3vh;
             }
             p{
                 font-family: 'din', Arial, Helvetica, sans-serif;
                 font-size: 30px;
                 line-height: 40px;
                 word-break: break-all;
                 margin-bottom: 5vh;
             }
         }
      }
   }
}

@media screen and (max-width:1680px){
       #about{
   .img-container{
      top: -9vh;
      left: 20vw;
      width: 650px;
      height: 788px;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
   }
   .about-header{
      padding-top: 5vh;
   }
   .about-body{
      padding-bottom: 20vh;
      .showcase{
         height: 100%;
         .letters{
             padding-top: 600px;
             padding-left: 17vw;
             .about-left-title{
                 font-family: 'kate';
               .d, .m{
                  font-size: 220px;
                  .left{
                    justify-self: end;
                  }
                  .right{
                     justify-self: start;
                  }
               }
             }
         }
         .paragraphs{
             z-index: 2;
             padding-top: 300px;
             padding-left: 0vh;
             color: $color-secondary;
             h3{
                 font-size: 70px;
             }
             p{
                 font-size: 45px;
             }
         }
      }
    }
   }
}

@media screen and (max-width:1440px){
      #about{
   .img-container{
      top: -9vh;
      left: 20vw;
      width: 500px;
      height: 788px;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
   }
   .about-header{
      padding-top: 5vh;
   }
   .about-body{
      padding-bottom: 20vh;
      .showcase{
         height: 100%;
         .letters{
             padding-top: 600px;
             padding-left: 17vw;
             .about-left-title{
                 font-family: 'kate';
               .d, .m{
                  font-size: 180px;
                  .left{
                    justify-self: end;
                  }
                  .right{
                     justify-self: start;
                  }
               }
             }
         }
         .paragraphs{
             z-index: 2;
             padding-top: 300px;
             padding-left: 0vh;
             color: $color-secondary;
             h3{
                 font-size: 40px;
             }
             p{
                 font-size: 25px;
             }
         }
      }
    }
   }
}

@media screen and (max-width:1024px){
   #about{
   .img-container{
    //position:initial;
      top: -9vh;
      left: 0vw;
      width: 100%;
      height: 788px;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
    }
   .about-header{
      padding-top: 5vh;
   }
   .about-body{
      padding-bottom: 20vh;
      .showcase{
         height: 100%;
         .letters{
            padding-top: 600px;
             padding-left: 17vw;
             .about-left-title{
                 font-family: 'kate';
               .d, .m{
                  font-size: 150px;
                  .left{
                    justify-self: end;
                  }
                  .right{
                     justify-self: start;
                  }
               }
             }
         }
         .paragraphs{
             z-index: 2;
             padding-top: 300px;
             padding-left: 0vh;
             color: $color-secondary;
             h3{
                 font-size: 40px;
             }
             p{
                 font-size: 25px;
             }
         }
      }
   }
   }
}

@media screen and (max-width:767px) {
    #about{
      .img-container{
      //position:initial;
         top: -9vh;
         left: 0vw;
         width: 100%;
         height: 788px;
         border-radius: 0 0 0 565px;
         img{
               width: 100%;
         }
      }
      .about-header{
         padding-top: 5vh;
      }
      .about-body{
         padding-bottom: 20vh;
         .showcase{
            height: 100%;
            .letters{
               display: none;
            }
            .paragraphs{
               z-index: 2;
               padding-top: 300px;
               padding-left: 0vh;
               color: $color-secondary;
               h3{
                  font-size: 42px;
               }
               p{
                  font-size: 30px;
               }
            }
         }
      }
   }
}


@media screen and (max-width:350px) {
    #about{
      .img-container{
      //position:initial;
         top: -9vh;
         left: 0vw;
         width: 100%;
         height: 788px;
         border-radius: 0 0 0 565px;
         img{
               width: 100%;
         }
      }
      .about-header{
         padding-top: 5vh;
      }
      .about-body{
         padding-bottom: 20vh;
         .showcase{
            height: 100%;
            .letters{
               display: none;
            }
            .paragraphs{
               z-index: 2;
               padding-top: 300px;
               padding-left: 0vh;
               color: $color-secondary;
               h3{
                  font-size: 32px;
               }
               p{
                  font-size: 20px;
               }
            }
         }
      }
   }
}

</style>