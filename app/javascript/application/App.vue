<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: 'Hello Vue!',
    };
  },
};
</script>

<style lang="scss">

body {
  padding: 0;
  margin: 0;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>
