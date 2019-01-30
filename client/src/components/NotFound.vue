<template>
  <section class="my-5 container">
    <div class="row">
      <div class="col-lg-1 col-xl-1"></div>
      
      <div class="col-lg-10 col-xl-10 text-center">
        <hr class="my-5">
        <div class="my-5"><i class="fa fa-exclamation-triangle iicon" aria-hidden="true"></i></div>
        <h1 class="font-weight-bold"> 404! </h1>
        <h4> Page Not Found </h4>
        <hr class="my-5">
      </div>
      
      <div class="col-lg-1 col-xl-1"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
  data(){
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.iicon{
    font-size: 12em;
}
</style>

