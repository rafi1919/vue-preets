<template>
    <div id="generatedIdCard">
        <img class="w-full absolute -z-10" src="@/assets/img/Preets3.png" id="generatedIdCard"/>
        <div class="output grid place-items-center h-screen">
            <div class="card shadow-xl text-left rounded-3lg">
                <div class="card-body ">
                    <div class="name flex">
                        <div class="navbar ">
                            <div class="flex-1 gap-2 -translate-x-2">
                                 <div id="preview">
                            <img v-if="formData.url" :src="formData.url" />
                        </div>
                                <!-- <img src="@/assets/img/test.jpg" alt="" class="object-cover h-7 w-7 rounded-full shadow bg-primary"/> -->
                                <img :src="formData.preview" alt="" class="object-cover h-7 w-7 rounded-full shadow bg-primary"/>
                                <h2 class="card-title text-white text-xs -translate-y-2">{{formData.PropsName}}</h2>
                            </div>
                            <div class="flex-none">
                                <img src="@/assets/img/logo-preets.png" alt="" class="h-5"/>
                            </div>
                        </div>

                    </div>
                    <p class="text-white mb-4 -translate-y-2" style="white-space: pre-line">{{formData.PropsComment}}</p>
                    <div class="relative grid h-4 gap-y-4">
                        <img src="@/assets/img/icon-preets.png" alt="" class="h-5"/>
                        <div class="bottom-0 ">
                            <p class="text-1xs">{{randomNumber}} likes</p>
                        </div>
                    </div>
                </div>
                <p class="translate-y-7 translate-x-7 text-2xs"> via Preets</p>  
                
            </div>  
        </div>
    </div>
</template>

<script>
export default {
  name: 'homeprint',
  props: {
      formData:  Object
  },
  data() {
     return{
         randomNumber:'',
     }; 
  },
    mounted() {

    this.randomNumber = Math.floor(Math.random()*400) +1;

  },

}
</script>



<style>
    .card{
        background: #1E1E1E;
        /* background: white ; */
        /* opacity: 50%; */
        width: 81vw;
        height: auto;
    }
    p{
        color: #656565;
    }
</style>