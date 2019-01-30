<template>
  <section class="my-5 container">
  <div class="row">
    <div class="col-lg-1 col-xl-1"></div>
    
    <div class="col-lg-10 col-xl-10">
      <button type="button" class="btn btn-primary" v-on:click="AddPost">Submit</button>

      <input-tag v-model="post.tag"></input-tag>
    
      <mdb-input label="Title" size="md" v-model="post.title"/>
      <mdb-input label="Description" size="md" v-model="post.desc"/>
      
      <textarea :value="post.content" @input="update" class="form-control md-textarea" rows="12"></textarea>
      
      <hr class="my-2">
    </div>
    
    <div class="col-lg-1 col-xl-1"></div>
   </div>
  
      <div class="my-3"></div>
      <div class="row">
        <div class="col-lg-1 col-xl-1"></div>
        
        <div class="col-lg-10 col-xl-10">
          <div v-html="compiledMarkdown"></div>
        </div>
        
        <div class="col-lg-1 col-xl-1"></div>
      </div>

  </section>
</template>

<script>
import _ from 'lodash';
import marked from 'marked';
import InputTag from 'vue-input-tag';
import { mdbInput } from 'mdbvue';

export default {
  name: 'WritePost',
  components:{
      InputTag,
      mdbInput
  },
  created(){

  },
  data () {
    return {
      post: {
          title: '',
          tag: [],
          desc: '',
          content: ''
      },
      tag: ''
    }
  },
  computed: {
    compiledMarkdown() {
        if(this.post.content)
            return marked(this.post.content, { sanitize: true });
            
        return '';
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.post.content = e.target.value;
    }, 300),
    GetBadgeStyle: function(str){
      
      if(str == 'Dev') return 'badge-dev';
      if(str == 'Thought') return 'badge-thought';
      if(str == 'Life Log') return 'badge-lifelog';
      if(str == 'Study') return 'badge-study';
      
      return 'badge-default';
    },
    AddPost: function(e){
        this.$http.post('/post', this.post)
        .then(this.$router.push({name : 'PostList'}));
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
