<template>
  <div id="app">
    <WelcomeIntro />
    <WalletConnect />
  </div>
</template>

<script>
import WelcomeIntro from './components/WelcomeIntro.vue'
import WalletConnect from './components/WalletConnect.vue'

export default {
  name: 'App',
  components: {
    WelcomeIntro,
    WalletConnect,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
