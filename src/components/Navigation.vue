<template>
  <!-- <div id="navigation">
    <router-link to="/">
      <span class="icon fa fa-home"></span>
      <span>Home</span>
    </router-link>
    <router-link to="/about">
      <span class="icon fa fa-info-circle"></span>
      <span>About</span>
    </router-link>
    <router-link to="/favorite">
      <span class="icon fa fa-heart"></span>
      <span>Favorites</span>
    </router-link>
  </div>-->
  <nav>
    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link to="/">
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <span>About</span>
        </router-link>
      </li>
      <li>
        <router-link to="/favorite">
          <span>Favorites</span>
        </router-link>
      </li>
    </ul>
    <div class="nav-wrapper teal">
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
        <i class="material-icons" @click="openSideNav">menu</i>
      </a>
      <img id="logo" alt="Vue logo" class="responsive-img brand-logo" src="../assets/logo.png">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/">
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span>About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/favorite">
            <span>Favorites</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CreateReceipt extends Vue {
  private openSideNav() {
    let elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, options);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  height: inherit;
}
</style>