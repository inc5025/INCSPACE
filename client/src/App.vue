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
          </mdb-navbar-nav>
          <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
              <a class="nav-link">
                <i class="fa fa-github iicon" aria-hidden="true"></i>
              </a>
            </li>
            <!--
            <li class="nav-item">
              <a class="nav-link" disabled>
                <i class="fa fa-facebook-square iicon" aria-hidden="true"></i>
              </a>
            </li>
            -->
            <li class="nav-item">
              <span class="white">{{isLoggedIn}}</span>
            </li>
          </ul>
        </mdb-navbar-toggler>
      </mdb-navbar>
    </div>
    <keep-alive :include="['PostList', 'NotFound']">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand } from 'mdbvue';
import store from './store';

export default {
  name: 'App',
    components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand
  },
  created () {
    document.title = "devinc.cc";
  },
  methods: {
    setPageNumber: function(num) {
      this.$store.commit('setPageNumber', num);
      this.$router.push({name : 'PostList'});
    }
  },
  computed:{
    isLoggedIn(){
      if(store.accessToken) return "LOGIN";
      else  return "";
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

pre {
  background-color: #F2F2FF;
  padding: 0.5rem;
  
  white-space: pre-wrap;       /* css-3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
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