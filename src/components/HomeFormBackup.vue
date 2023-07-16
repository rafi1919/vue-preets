<template>
       <div id="homeform" >
        <img class="w-full absolute -z-10" src="@/assets/img/Preets3.png" />
        <div class="output grid place-items-center h-screen">
            <div>
            <h1 class="mb-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Preets</h1>
            <p class=" text-sm font-normal text-gray-500 lg:text-sm sm:px-16 dark:text-gray-400">Like Threats, but no</p>
            </div>
            <div class="card shadow-xl text-left rounded-3lg">
            <form onsubmit="return false" class="w-full p-5">
                    <div class="">
                    <h5>1. single file</h5>
                        <form>
                            <div class="form-group">
                                 <img :src="preview" alt="" class="object-cover h-7 w-7 rounded-full shadow bg-primary"/>
                            <label for="my-file">Select Image</label>
                            <input  type="file" 
                                    accept="image/*" 
                                     @change="previewImage"
                                    class="form-control-file" id="my-file"
                                     @input="changeFormData({ ['preview']: $event.target.value })"
                                    >
                        
                            <div class="border p-2 mt-3">
                                <p>Preview Here:</p>
                                <template v-if="preview">
                                <img :src="preview" class="img-fluid h-10" />
                                <p class="mb-0">file name: {{ image.name }}</p>
                                <p class="mb-0">size: {{ image.size/1024 }}KB</p>
                                </template>
                            </div>
                            </div>
                        </form>
                    </div>
                <div class="form-name">
                    <input  type="text" 
                            placeholder="Input Username" 
                            class="input input-bordered input-primary w-full mb-5"
                            :value="PropsName"
                            @input="changeFormData({ ['PropsName']: $event.target.value })"
                            />        
                </div>
                <div class="form-control">
                    <textarea   type="text" 
                                placeholder="Comment"
                                class="textarea textarea-primary textarea-bordered h-24" 
                                :value="PropsComment"
                                @input="changeFormData({ ['PropsComment']: $event.target.value })"
                                >
                    </textarea>
                </div>
                 <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <!-- <a href="/about">
                        <button type="submit"  @click="generateCard()" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Posts</button>
                    </a> -->
                    <button class="btn-generate inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" 
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
     }; 
  },
  methods: {
      changeFormData(value) {
          this.$emit("changeFormData", value);
      },
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
        a.setAttribute("download", `collegeidcard.png`);
        a.setAttribute("href", image);
        a.click();
      },
  }
}
</script>

<style scoped>
  .textarea { /* csslint allow: adjoining-classes */
  color: rgb(255, 255, 255);
    }   
    .input{ /* csslint allow: adjoining-classes */
  color: rgb(255, 255, 255);
    }

    #homeform{
        width: 100%;
        
    }
</style>    