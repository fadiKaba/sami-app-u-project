<template>

   <div id="home">
      <div class="home-header">
         <span class="h-el">home</span>
      </div>
      <div class="home-body">
         <div class=" showcase">
            <h1 id="word"><span class="h-el">S</span><span class="h-el">a</span><span class="h-el">m</span><span class="h-el">i</span> <br/> Kaba</h1>
            <p ref="p1" class="h-el">I'm a visual/UI designer <br />
               who passionately creates <br />
               and endlessly innovates</p>
         </div>
      </div>
      <a @click="scrollToBot()"><img ref="arowd" id="arow-down" src="@/assets/icos/down.png" alt="down"></a>
   </div>
</template>

<script>

import anime from '@/node_modules/animejs/lib/anime';

export default {
   mounted: function(){
     // this.runAnn()
   //screen.width > 767 ? this.runAnn() : '';
   },
   methods: {
     scrollToBot: function(){
        console.log('dd')
       window.scrollTo(0,document.body.scrollHeight)
     },
      runAnn: function(){
         anime({
              targets: '.h-el',
               translateX: '80vw',
              // loop: true,
               easing: 'easeInElastic(1, .6)',
               delay: anime.stagger(100),
               direction: 'reverse'
            });

      }
   }

}
</script>

<style lang="scss">

#home{
   height: 100vh;
   .home-header{
      font-family: 'din-bold', Arial, Helvetica, sans-serif;
      padding-top: 5vh;
   }
   .home-body{
      height: 100%;
      padding-bottom: 30vh;
      .showcase{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;

         h1{
            font-family: 'kate', Arial, Helvetica, sans-serif;
            margin-bottom: 2rem;
            font-size: 150px;
            line-height: 11.25rem;
            span{
               display: inline-block;
            }
         }
         p{
            font-size: 1.125rem;
         }

      }
   }
   #arow-down{
      position: absolute;
      top: 93vh;
      left: calc(50vw - calc((35px)/2));
      width: 35px;
      cursor: pointer;
      animation: arow-down 10s ease infinite;
      z-index: 2;
   }
}

@media screen and (max-width:1620px){
   #home{
      .home-body{
          padding-bottom: 27vh;
         .showcase{
            h1{
              font-size: 110px;
              line-height: 9.25rem;
            }
            p{

            }
         }
      }
   }
}

@media screen and (max-width:1420px){
   #home{
      .home-body{
         // padding-bottom: 10vh;
         .showcase{
            h1{
            //   font-size: 100px;
            //   line-height: 8.25rem;
            }
            p{
            }
         }
      }
   }
}

@media screen and (max-width:1179px){
   #home{
      .home-body{
         // padding-bottom: 10vh;
         .showcase{
            h1{
            //   font-size: 85px;
            //   line-height: 7.25rem;
            }
            p{
            }
         }
      }
   }
}


@media screen and (max-width:1024px){
   #home{
      .home-body{
         // padding-bottom: 10vh;
         .showcase{
            h1{
            // font-size: 60px;
            // line-height: 6.25rem;
            }
            p{
            }
         }
      }
   }
}

@media screen and (max-width:767px){
   #home{
      .home-header{
      display: none;
       }
      .home-body{
         .showcase{
            h1{
            font-size: 80px;
            line-height: 7.25rem;
            text-align: left;
            padding-left: 10px;
            }
            p{
               text-align: left;
               padding-left: 10px;
            }
         }
      }
   }
}

</style>