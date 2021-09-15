<template>

   <div id="contact">
      <div class="row contact-body">
         <div class="col-md-6 showcase">
            <div class="contact-header">
              <span class="tit">Contact</span>
            </div>
            <div class="cont">
              <span >Hello!</span>
              <p>Let's get in touch, and Step up your vision!</p>
            </div>
         </div>
         <div class="col-md-6">
             <Form></Form>
         </div>
      </div>
      <a @click="scrollToTop()"><img ref="arowd" id="arow-down-red" src="@/assets/icos/down.png" alt="down"></a>
   </div>
</template>

<script>
export default {
   mounted: function(){
     this.animateChoices('.contact-header', 0.5, -200);
     this.animateChoices('.cont span', 0.7, '-58vh');
     this.animateChoices('.cont p', 1, -200);

   },
   methods: {
      scrollToTop: function(){
        window.scrollTo(document.body.scrollHeight,0)
     },
     animateChoices: function(el, scrub, x){
        gsap.from(el, {
         scrollTrigger: {
            trigger: el,
            start: 'center 90%',
            end: 'center bottom',
          //  markers: true,
            toggleActions: "restart none none none",
            scrub: scrub
         },
         x: x,
         });
      },
   },

}
</script>

<style lang="scss">

@import '@/assets/scss/colors.scss';

#contact{
   height: 100vh;
   .contact-body{
      height: 100%;
      padding-bottom: 30vh;
      color: $color-secondary;
     // width: 100%;
      margin-right: 0;
      .showcase{
        height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
        .contact-header{
          margin-top: 5vh;
            .tit{
              font-family: 'din-bold', Arial, Helvetica, sans-serif;
            }
        }
        .cont{
          span{
            font-size: 150px;
            line-height: 7.25rem;
            font-family: 'kate', Arial, Helvetica, sans-serif;
            display: inline-block;
            padding-bottom: 5vh;
          }
          p{
          margin-bottom: 6vh;
          font-size: 18px;
          }
         }
      }
   }
   #arow-down-red{
      position: absolute;
      bottom: 5vh;
      left: calc(50vw - calc((35px)/2));
      width: 35px;
      transform: rotate(180deg);
      cursor: pointer;
      z-index: 3;
      animation: arow-up 10s ease infinite;
   }
}

@media (max-width:1620px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
              font-size: 130px;
              padding-bottom: 4vh;
            }

          }
        }
      }
   }
}

@media screen and (max-width:1420px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
              font-size: 110px;
            }

          }
        }
      }
   }
}

@media screen and (max-width:1179px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
               font-size: 90px;
               padding-bottom: 2vh;
            }
          }
        }
      }
   }
}

@media screen and (max-width:1024px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
              font-size: 80px;
            }
          }
        }
      }
   }
}

@media screen and (max-width:767px){
    #contact{
      height: auto;
      .contact-body{
        padding-bottom: 130px;
        .showcase{

          .contact-header{
            text-align: left;
            padding-left: 10px;
            .tit{

            }
          }
          .cont{
            text-align: left;
            padding-left: 10px;
            span{
              padding-top: 3vh;
              line-height: 5.25rem;
              font-size: 80px;
            }
          }
        }
      }
   }
}


</style>