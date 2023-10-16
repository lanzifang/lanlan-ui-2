<template>
  <div>
    导航栏 | 
    <router-link to="/">Fang</router-link> |
    <router-link to="/xxx">Fang2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
