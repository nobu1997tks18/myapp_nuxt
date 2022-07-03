<template>
  <div class="l-footer">
    <div class="l-footer__link-block">
      <p>
        <span class="material-icons">home</span>
        TOP
      </p>
      <p>
        <span class="material-icons">currency_yen</span>
        資産管理
      </p>
      <p>
        <span class="material-icons">settings</span>
        各種マスタ
      </p>
      <p>
        <span class="material-icons">person</span>
        マイページ
      </p>
      <p>
        <span class="material-icons">logout</span>
        ログアウト
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.l-footer {
  height: $header-height;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 5px solid $sub-color;
  background-color: $default-background;
  &__link-block {
    display: flex;
    justify-content: space-around;
    width: 100%;
    p {
      width: 100%;
      background-color: $main-color;
      color: #ffffff;
      font-size: 0.7rem;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
