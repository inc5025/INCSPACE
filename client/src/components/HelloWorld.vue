<template>
  <div class="container">
        <!-- Section: Blog v.3 -->
    <section class="my-4">
    
      <!-- Section heading -->
      <h2 class="my-5"></h2>
      <!-- Section description -->
    
      <!-- Grid row -->
      <div class="row">
    
        <div class="col-lg-1 col-xl-1"></div>
    
        <!-- Grid column -->
        <div class="col-lg-10 col-xl-10">
    
          <h5>
            <a href="#" class="badge green">Dev</a>
            <a href="#" class="badge badge-default">incspace</a>
          </h5>
          <!-- Post title -->
          <h1 class="font-weight-bold mb-3"><strong>incspace postmotem</strong></h1>
          <!-- Post data -->
          <p>2019. 1. 21</p>
    
          <hr>
        </div>
        <!-- Grid column -->
        
        <div class="col-lg-1 col-xl-1"></div>
        
      </div>
    
    </section>
    <!-- Section: Blog v.3 -->
    <section>
      <div class="row">
    
        <div class="col-lg-1 col-xl-1"></div>
    
        <!-- Grid column -->
        <div class="col-lg-10 col-xl-10">
          <div id="markdowneditor">
            <textarea :value="input" @input="update"></textarea>
            <button v-on:click="logging">log</button>
            <div v-html="compiledMarkdown"></div>
          </div>
    
          <hr class="my-5">
        </div>
        <!-- Grid column -->
        
        <div class="col-lg-1 col-xl-1"></div>
        
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';
import marked from 'marked';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300),
    logging: function(e){
      console.log(marked(this.input, { sanitize: true }));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  text-align: left;
}

h1, h2 {
  font-weight: bold;
}
p{
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
