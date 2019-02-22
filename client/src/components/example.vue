<template>
  <section class="my-5 container">
    <div class="row" id="editor">
      <textarea :value="input" @input="update" class="form-control md-textarea" rows="12"></textarea>
    </div>
    
    <div class="my-3"></div>
    
    <div class="row" id="preview">
      <div v-html="compiledMarkdown"></div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash';
import marked from 'marked';
import hljs from 'highlightjs';

export default {
  name: 'Example',
  created(){
    marked.setOptions({
      highlight: function(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      }
    });
  },
  data(){
    return {
      input: "# Hello"
    };
  },
  computed: {
    compiledMarkdown() {
      if(this.input)
        return marked(this.input, { sanitize: true });
            
      return '';
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
}
</script>