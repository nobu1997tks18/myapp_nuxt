<template>
  <div>
    <Header />
    <Footer />
    <main>
      <nuxtPage />
    </main>
  </div>
</template>
<script>
import Header from '@/components/layouts/header.vue'
import Footer from '@/components/layouts/footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  min-width: 100vw;
  padding-top: $header-height + 30px;
  padding-bottom: $header-height + 30px;
  padding-right: 30px;
  padding-left: 30px;
  overflow: scroll;
}
</style>
