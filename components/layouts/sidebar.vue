<template>
  <div class="l-sidebar">
    <div class="l-sidebar__userinfo">
      <p>2022年6月30日</p>
      <p>ユーザー名</p>
      <p class="c-link-button">マイページ</p>
    </div>
    <div class="l-sidebar__link-block">
      <p class="">
        <span class="material-icons">currency_yen</span>
        資産管理
      </p>
      <p class="l-sidebar__link-block">
        <span class="material-icons">settings</span>
        各種マスタ
      </p>
      <p class="l-sidebar__link-block">
        <span class="material-icons">logout</span>
        ログアウト
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.l-sidebar {
  height: calc(100vh - 70px);
  width: $sidebar-width;
  border-right: 5px solid #eeeeee;
  background-color: $default-background;
  position: fixed;
  top: 70px;
  left: 0;
  &__userinfo {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #eeeeee;
    text-align: center;
    box-sizing: border-box;
    p {
      padding: 5px;
    }
  }
  &__link-block {
    padding: 10px;
    p {
      padding: 15px 0 15px 20px;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
