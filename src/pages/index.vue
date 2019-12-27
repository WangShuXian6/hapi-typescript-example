<template>
  <div class="container">
    <h1>User Agent</h1>
    <p>{{ userAgent }}</p>
    <p>
      <NuxtLink to="/posts">Blog</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  head: {
    //script: [{ src: "https://appx/web-view.min.js" }],
    link: [
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  asyncData: ({ req }) => {
    return {
      userAgent: req
        ? req.headers["user-agent"]
        : typeof navigator !== "undefined"
        ? navigator.userAgent
        : "No user agent (generated)"
    };
  }
};
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
p {
  font-size: 20px;
}
a {
  color: #41b883;
}
</style>