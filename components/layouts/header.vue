<template>
  <div class="l-header">
    <h2>MyApp</h2>
  </div>
</template>

<style lang="scss" scoped>
.l-header {
  background-color: $main-color;
  border-bottom: 5px solid $sub-color;
  display: flex;
  justify-content: space-between;
  height: $header-height;
  line-height: 50px;
  width: 100vw;
  padding: 5px 20px;
  box-sizing: border-box;
  color: #ffffff;
  position: fixed;
  h2 {
    width: 100%;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
