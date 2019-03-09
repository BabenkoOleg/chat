<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
html,
body,
#app,
.main-wrapper {
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
}

.full-height {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &.auth {
    background: #262c30;
  }
}
</style>
