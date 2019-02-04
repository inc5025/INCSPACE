<template>
  <div id="app">
    <div class="container">
      <mdb-navbar dark class="indigo">
        <mdb-navbar-brand class="title h1 white-text">
          <a v-on:click="setPageNumber(1)" class="white-text">devinc.cc</a>
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item>
              <a v-on:click="setPageNumber(1)" class="white-text">Blog</a>
            </mdb-nav-item>
            <mdb-nav-item href="" class="disabled">Storage</mdb-nav-item>
            <mdb-nav-item href="" class="disabled">About</mdb-nav-item>
          </mdb-navbar-nav>
          <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
              <a class="nav-link" disabled>
                <i class="fa fa-github iicon" aria-hidden="true"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" disabled>
                <i class="fa fa-facebook-square iicon" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </div>
    <keep-alive :include="['PostList', 'NotFound']">
      <router-view/>
    </keep-alive>
    
    <!--
    <div class="container">
      <footer class="page-footer font-small indigo pt-4">
        <div class="container-fluid text-center text-md-left indigo">
          <div class="row indigo">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae harum esse fugiat. Itaque, culpa?</p>
    
            </div>
            <hr class="clearfix w-100 d-md-none pb-3 indigo">
            <div class="col-md-6 mb-md-0 mb-3">
              <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3 dark-indigo">© 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
    -->
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand } from 'mdbvue';

export default {
  name: 'App',
    components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand
  },
  methods: {
    setPageNumber: function(num) {
      this.$store.commit('setPageNumber', num);
      this.$router.push({name : 'PostList'});
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar .dropdown-menu a:hover {
  color: inherit !important;
}

.iicon{
  font-size: 1.4em;
}
</style>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.loading-position-center{
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
}

.badge-dev{
  color: #fff;
  background-color: #00C851;
}

.badge-thought{
  color: #fff;
  background-color: #795548;
}

.badge-lifelog{
  color: #fff;
  background-color: #FF8800;
}

.badge-study{
  color: #fff;
  background-color: #aa66cc;
}
</style>