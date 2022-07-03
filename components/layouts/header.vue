<template>
  <div class="l-header">
    <h2>MyApp</h2>
  </div>
</template>

<style lang="scss" scoped>
.l-header {
  height: $header-height;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  line-height:$header-height;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: $main-color;
  color: #ffffff;
  border-bottom: 5px solid $sub-color;
  h2 {
    width: 100%;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
