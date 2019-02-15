<template>
  <section class="my-5 container">
    <transition name="fade"><div v-show="loading">
      <div class="row">
        <div class="col-lg-1 col-xl-1"></div>
        
        <div class="col-lg-10 col-xl-10">
          <!-- Tag -->
          <h5><span v-for="t in post.tag">
            <a class="badge" v-bind:class="GetBadgeStyle(t)">{{t}}</a>&nbsp;</span>
          </h5>
          <!-- Title -->
          <h1 class="font-weight-bold mb-3 text-dark"><strong>{{post.title}}</strong></h1>
          <!-- Date -->
          <p>{{post.created_date | Date_YMD}}</p>
          
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
    </div></transition>
    
    <transition name="fade" appear><div v-if="!loading" class="fixed-top loading-position-center">
      <div class="spinner-border text-primary" role="status" style="width: 5rem; height: 5rem;">
        <span class="sr-only">Loading...</span>
      </div>
    </div></transition>
  </section>
</template>

<script>
import marked from 'marked';
import hljs from 'highlightjs';

export default {
  name: 'PostView',
  created(){
      this.$http.get('/post/'+this.$route.params.id)
        .then((res)=>{
          this.post = res.data;
          this.loading = true;
        })
        .catch((e)=>{
          this.$router.push({name : 'NotFound'});
        });
      marked.setOptions({
        langPrefix: '',
        highlight: function(code, lang) {
          return hljs.highlightAuto(code, [lang]).value
        }
      });
  },
  data () {
    return {
      post: '',
      loading: false
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
    GetBadgeStyle: function(str){
      
      if(str == 'Dev') return 'badge-dev';
      if(str == 'Thought') return 'badge-thought';
      if(str == 'Life Log') return 'badge-lifelog';
      if(str == 'Study') return 'badge-study';
      
      return 'badge-default';
    }
  }
}
</script>