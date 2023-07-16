<template>
       <div id="homeform" class="absolute z-20">
        <img class="w-full absolute -z-10" src="@/assets/img/dark.jpg" />
        <div class="output grid place-items-center h-screen">
            <div class="mt-6">
            <h1 class="mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate-bounce ">Preets</h1>
            <p class="mt-3 text-sm font-normal text-gray-500 lg:text-sm sm:px-16 dark:text-gray-400">Like Threads, but no</p>
            </div>
            <div class="card shadow-xl text-left rounded-3lg">
            <form onsubmit="return false" class="w-full p-5">        
                        <form>
                            <div class="form-group">
                            <p class="text-white">Select Profile Picture 1:1 size if you can </p>
                            <input  type="file" 
                                    accept="image/*" 
                                     @change="previewImage"
                                    class=" form-control-file text-sm text-white mb-3" 
                                    id="my-file"
                                    >
                            <!-- <label for="my-file" class="bg-white p-1 mb-3">Select file</label> -->
                            <!-- <div class="border input-primary p-2 mb-3">
                                <p>Preview Here:</p>
                                <template v-if="preview">
                                <img :src="preview" class="object-cover h-7 w-7" />
                                <p class="mb-0">file name: {{ image.name }}</p>
                                <p class="mb-0">size: {{ image.size/1024 }}KB</p>
                                </template>
                            </div> -->
                            </div>
                        </form>   
                <div class="form-name">
                    <input  type="text" 
                            placeholder="Input Username" 
                            class="input input-ghost input-primary bg-transparent text-white w-full bg-grey mb-3"
                            v-model="PropsName" 
                            />        
                </div>
                <div class="form-control">
                    <textarea   type="text" 
                                placeholder="Start a preet..."
                                class="textarea textarea-ghost textarea-primary bg-transparent text-white w-full h-24" 
                                v-model="PropsComment"
                                >
                    </textarea>
                </div>
                 <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <!-- <a href="/about">
                        <button type="submit"  @click="generateCard()" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Posts</button>
                    </a> -->
                    <button class="btn-generate inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-primary-400" 
                            @click="generateCard"
                            >
                            Generate Preets
                    </button>
                    <div class="flex pl-0 space-x-1 sm:pl-2">
                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                </svg>
                            <span class="sr-only">Attach file</span>
                        </button>
                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                            <span class="sr-only">Set location</span>
                        </button>
                        <button type="button" class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            <span class="sr-only">Upload image</span>
                        </button>
                    </div>
                </div>
            </form>
      
            <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>    
            </div>  
        </div>
    </div>
       <div id="generatedIdCard">
        <img class="w-full absolute -z-10" src="@/assets/img/Preets3.png" id="generatedIdCard"/>
        <div class="output grid place-items-center h-screen">
            <div class="card shadow-2xl text-left rounded-3lg">
                <div class="card-body ">
                    <div class="name flex">
                        <div class="navbar ">
                            <div class="flex-1 gap-2 -translate-x-2">                                
                                <img :src="preview" alt="" class="object-cover h-7 w-7 rounded-full shadow bg-primary"/>
                                <h2 class="card-title text-white text-xs -translate-y-2 text-sm">{{PropsName}}</h2>
                            </div>
                           <div class="flex-none">
                                <img src="@/assets/img/logo-preets.png" alt="" class="h-5"/>
                            </div>
                        </div>

                    </div>
                    <p class="text-white mb-4 -translate-y-2 text-sm" style="white-space: pre-line">{{PropsComment}}</p>
                    <div class="relative grid h-4 gap-y-4">
                        <img src="@/assets/img/icon-preets.png" alt="" class="h-5"/>
                        <div class="bottom-0 ">
                            <p class="text-sm">{{randomNumber}} likes</p>
                        </div>
                    </div>
                </div>
                <p class="translate-y-7 translate-x-7 text-sm"> via Preets</p>  
                
            </div>  
        </div>
    </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: 'homeform',
  props: {
      formData:  Object
  },
  data() {
     return{
         preview: null,
         image: null,
         PropsName:"",
         PropsComment:"",
         randomNumber:"",
     }; 
  },
  methods: {
      previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
    }
    },
      async generateCard() {
        console.log("Button clicked");
        const canvas = await html2canvas(document.getElementById("generatedIdCard"));
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const a = document.createElement("a");
        a.setAttribute("download", `preets.png`);
        a.setAttribute("href", image);
        a.click();
      },
  },
  mounted() {
        this.randomNumber = Math.floor(Math.random()*400) +1;

  },
}
</script>

<style scoped>
    .text-white { /* csslint allow: adjoining-classes */
        color: rgb(255, 255, 255);
    }   
    #homeform{
        width: 100%;        
    }
    .card{
        background: #1F1F1F;
    }
</style>    
