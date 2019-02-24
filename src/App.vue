<template>
  <div id="app">
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "app",
  created: function() {}
};
</script>
<script>
export default {
  components: {},
  name: "app",
  created: function() {}
};
</script>
<style lang="scss">
@import "assets/style.scss";
</style>

<style lang="scss">
.main-container {
  min-height: calc(100vh - 70px);
  margin-top: 24px;
}
@import url("https://fonts.googleapis.com/css?family=PT+Sans");
body {
  background: url("https://i.imgur.com/aUhpEz3.jpg") no-repeat fixed center
      center,
    #333;
  background-size: cover;
  font-family: "PT Sans";

  nav {
    .nav-wrapper {
      margin: 0 20px;
      float: right;
    }
  }
}
* {
  box-sizing: border-box;
}
.clearfix::after,
.clearfix::before {
  content: "";
  clear: both;
  display: table;
}
</style>
