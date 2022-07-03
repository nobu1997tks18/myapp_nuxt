<template>
  <div>
    <Header />
    <Sidebar />
    <main>
      <nuxtPage />
    </main>
  </div>
</template>
<script>
import Header from '@/components/layouts/header.vue'
import Sidebar from '@/components/layouts/sidebar.vue'
export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  min-width: 100vw;
  padding-top: $header-height + 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-left: $sidebar-width + 30px;
  overflow: scroll;
}
</style>
