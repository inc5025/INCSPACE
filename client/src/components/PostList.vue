<template>
  <div class="container">
    <!-- Section: Blog v.3 -->
<section class="my-5">

  <!-- Section heading -->
  <h2 class="h1-responsive font-weight-bold text-center my-5"></h2>
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
      <!-- Excerpt -->
      <p class="dark-grey-text">게시글에 대한 설명을 입력할 공간입니다. 게시글에 대한 설명을 입력할 공간입니다. 
      게시글에 대한 설명을 입력할 공간입니다. 게시글에 대한 설명을 입력할 공간입니다. 게시글에 대한 설명을 입력할 공간입니다. </p>

      <hr class="my-5">
    </div>
    <!-- Grid column -->
    
    <div class="col-lg-1 col-xl-1"></div>

  </div>
  <!-- Grid row -->
  
  <!-- Grid row -->
  <div class="row">

    <div class="col-lg-1 col-xl-1"></div>

    <!-- Grid column -->
    <div class="col-lg-10 col-xl-10">

      <h5>
        <a href="#" class="badge brown">Thought</a>
        <a href="#" class="badge badge-default">incspace</a>
      </h5>
      <!-- Post title -->
      <h1 class="font-weight-bold mb-3"><strong>Hello, incspace!</strong></h1>
      <!-- Post data -->
      <p>2019. 1. 21</p>
      <!-- Excerpt -->
      <p class="dark-grey-text"></p>

      <hr class="my-5">
    </div>
    <!-- Grid column -->
    
    <div class="col-lg-1 col-xl-1"></div>

  </div>
  <!-- Grid row -->
  
  <!-- Grid row -->
  <div class="row">

    <div class="col-lg-1 col-xl-1"></div>

    <!-- Grid column -->
    <div class="col-lg-10 col-xl-10">

      <h5>
        <a href="#" class="badge orange">Life Log</a>
        <a href="#" class="badge purple">Study</a>
        <a href="#" class="badge red">Game</a>
      </h5>
      <!-- Post title -->
      <h1 class="font-weight-bold mb-3"><strong>2019년 1월의 나</strong></h1>
      <!-- Post data -->
      <p>2019. 1. 21</p>
      <!-- Excerpt -->
      <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
        quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus
        et aut officiis debitis cum soluta nobis est eligendi placeat facere aut rerum.</p>

      <hr class="my-5">
    </div>
    <!-- Grid column -->
    
    <div class="col-lg-1 col-xl-1"></div>

  </div>
  <!-- Grid row -->
  
  <nav aria-label="Page navigation example">
    <ul class="pagination pg-blue justify-content-center">
      <li class="page-item">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item active"><a class="page-link">1</a></li>
      <li class="page-item"><a class="page-link">2</a></li>
      <li class="page-item"><a class="page-link">3</a></li>
      <li class="page-item"><a class="page-link">4</a></li>
      <li class="page-item"><a class="page-link">5</a></li>
      <li class="page-item">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>

</section>
<!-- Section: Blog v.3 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
