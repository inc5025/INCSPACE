<template>
  <section class="my-5 container">
    <transition name="fade"><div v-show="loading">
      <div class="my-5"></div>
    
      <div class="row" v-for="post in paginatedData">
        <div class="col-lg-1 col-xl-1"></div>
        
        <div class="col-lg-10 col-xl-10">
          <!-- Tag -->
          <h5><span v-for="t in post.tag">
            <a class="badge" v-bind:class="GetBadgeStyle(t)">{{t}}</a>&nbsp;</span>
          </h5>
          <!-- Title -->
          <h1 class="font-weight-bold mb-3"><a v-on:click="moveTo(post.post_id)" class="text-dark"><strong>{{post.title}}</strong></a></h1>
          <!-- Date -->
          <p>{{post.created_date | Date_YMD}}</p>
          <!-- Description -->
          <p class="dark-grey-text">{{post.desc}}</p>
          
          <hr class="my-5">
        </div>
        
        <div class="col-lg-1 col-xl-1"></div>
      </div>
      
      <!-- Paging -->
      <nav aria-label="Page navigation">
        <ul class="pagination pg-blue justify-content-center">
          <li class="page-item" v-show="pageNumber > 1">
            <a class="page-link" aria-label="Previous" v-on:click="prevPage">
              <span aria-hidden="true">&laquo; Prev</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item" v-show="pageNumber < pageCount">
            <a class="page-link" aria-label="Next" v-on:click="nextPage">
              <span aria-hidden="true">Next&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div></transition>
    
    <transition name="fade" appear><div v-if="!loading" class="fixed-top loading-position-center">
      <div class="spinner-border text-primary" role="status" style="width: 5rem; height: 5rem;">
        <span class="sr-only">Loading...</span>
      </div>
    </div></transition>
  </section>
</template>

<script>
export default {
  name: 'PostList',
    created(){
      this.$http.get('/post')
      .then((res)=>{
          this.posts = res.data.reverse();
          this.loading = true;
      })
      .catch((e)=>{
        console.log(e);
      });
  },
  data () {
    return {
      posts: [],
      loading: false,
      pageNumber: 1,
      listSize: 5
    };
  },
  methods:{
        moveTo: function(id){
            this.$router.push('/'+id);
        },
        GetBadgeStyle: function(str){
        
        if(str == 'Dev') return 'badge-dev';
        if(str == 'Thought') return 'badge-thought';
        if(str == 'Life Log') return 'badge-lifelog';
        if(str == 'Study') return 'badge-study';
        
        return 'badge-default';
      },
      nextPage(){
        window.scrollTo(0,0);
        //this.pageNumber++;
        this.$store.commit('setPageNumber', this.pageNumber + 1);
      },
      prevPage(){
        window.scrollTo(0,0);
        //this.pageNumber--;
        this.$store.commit('setPageNumber', this.pageNumber - 1);
      }
    },
    computed:{
      pageCount(){
        let l = this.posts.length,
            s = this.listSize;
            
        return Math.ceil(l/s);
      },
      paginatedData(){
        const start = (this.pageNumber - 1) * this.listSize,
              end = start + this.listSize;
        return this.posts.slice(start, end);
      }
    },
    watch:{
      '$store.state.pageNumber': function(val) {
        this.pageNumber = val;
      }
    }
};
</script>

<style scoped>
.container{
  text-align: left;
}

h1, h2 {
  font-weight: normal;
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
