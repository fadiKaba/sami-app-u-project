<template>
  <div id="form-container">
    <form @submit="handleSubmit($event)">
        <div class="mb-3" id="name-container">
            <label for="exampleInputName1" id="name-label" class="form-label">Name</label>
            <input v-model="name" type="text" class="form-control" id="exampleInputName1">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" id="email-label" class="form-label">Email address</label>
            <input v-model="email" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" id="message-label" class="form-label">Message</label>
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="submit" id="sub-btn" class="btn mt-4 light-btn">Send</button>
    </form>

    <!-- Modal -->
    <div class="modal fade" id="form-error-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="form-error-modal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="form-error-modalLabel">Invalid information</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <li v-for="error in errors" :key="error.id">
                            {{error.message}}
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn red-btn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    data: function(){
      return {
        name: '',
        email: '',
        message: '',
        errors: []
      }
    },
    created: function(){

    },
    mounted: function(){
    // this.animateInputs();
      this.animateChoices('#name-label', 0.4, '90vh');
      this.animateChoices('#exampleInputName1', 0.5, '90vh');
      this.animateChoices('#email-label', 0.6, '90vh');
      this.animateChoices('#exampleInputEmail1', 0.7, '90vh');
      this.animateChoices('#message-label', 0.8, '90vh');
      this.animateChoices('#exampleFormControlTextarea1', 0.9, '90vh');
      this.animateChoices('#sub-btn', 1, '90vh');
    },
    methods: {
        animateChoices: function(el, scrub, x){
            gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'center 85%',
                end: 'center bottom',
            // markers: true,
                toggleActions: "restart none none none",
                scrub: scrub,
            },
            x: x,
            duration: 0.5
            });
      },
      handleSubmit: function(e){
       e.preventDefault();
       this.errors = [];
       this.validateValue('name', this.name);
       this.validateValue('email', this.email);
       this.validateValue('message', this.message);
       if(this.errors.length > 0){
         $('#form-error-modal').modal('show')
       }else {
           // ajax request here
       }
      },
      validateValue: function(type, value){
        if(type == 'name'){
            if(value.length >= 3){
                if(/^[A-Za-z-0-9 ]+$/.test(value)){
                   return true;
                }else{
                    this.createError(1, 'The name must not include strange letters',  this.errors);
                    return false;
                }
            }else{
               this.createError(2, 'The name must contain more than 3 characters', this.errors);
               return false;
            }
        }
        else if(type == 'email'){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(value)){
                return true
            }
            this.createError(3, 'The Email is not valid', this.errors);
            return false;
        }
        else if(type == 'message'){
            if(value.length > 10){
                return true
            }else{
                this.createError(4, 'The message is too short', this.errors);
                return false;
            }
        }else{
            throw 'invalid type'
        }
      },
      createError: function(id ,message, arr){
        arr.push({id: id, message});
      }
    }

}
</script>

<style lang="scss">

@import '@/assets/scss/colors.scss';

 #form-container{
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-end;
     width:25vw;
     margin: 0 auto;
     margin-top:4vh;
    form{
         z-index: 2;
        input, textarea{
            background-color: rgba($color-svg, 0.4);
            border: none;
            color: $color-secondary;
        }
        small{
            color: $color-light;
        }
        button{
            width: 100%;
        }
    }
 }

 .modal{
     background-color: rgba($color-primary, 0.5);
     .modal-content{
         background-color: $color-secondary;
         .modal-header{
             border-bottom: none;
             background: $color-primary;
             .btn-close{

             }
             .modal-title{
                color: $color-secondary;
                font-weight: bold;
             }
         }
         .modal-body{
            li{
                color: $color-primary;
            }
         }
         .modal-footer{

         }
     }
 }

  @media screen and (max-width:1440px){
  #form-container{
      form{
          input, textarea{

          }
          button{
            &:hover{

            }
          }
      }
  }
 }

  @media screen and (max-width:1100px){
  #form-container{
      form{
          input, textarea{

          }
          button{
            &:hover{

            }
          }
      }
  }
 }

 @media screen and (max-width:767px){
  #form-container{
      width:70vw;
      margin-top:1vh;
      margin: 0 0;
      width:80vw;
      form{
           text-align: left;
            padding-left: 10px;
           // margin-right: auto;
          input, textarea{

          }
          button{
            &:hover{

            }
          }
      }
  }
 }
</style>