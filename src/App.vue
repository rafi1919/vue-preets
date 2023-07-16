<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="container d-flex container-box">
  <HomeForm  :formData="formData"
        @changeFormData="changeFormData($event)" />
  <!-- <HomePrint :formData="formData"/> -->
  </div>
</template>

<script>
import HomeForm from './components/HomeForm.vue';
import HomePrint from './components/HomePrint.vue';
export default {
  name: "App",
  components: {
    HomeForm,
    HomePrint
  },
  data() {
    return {
      title: 'ID Card Generator',
      formData: {
        PropsName: "",
        PropsComment: "",
        url:"",
      }
    }
  },
  methods: {
    changeFormData(keyObject) {
      this.formData = Object.assign(this.formData, keyObject);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
