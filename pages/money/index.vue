<template>
  <div class="money">
    <div class="money__upper">
      <div class="money__summary">
        <div class="money__summary__year">
          <select><option value="2022">2022年</option></select>
        </div>
        <div class="money__summary__month">
          <span class="material-icons">chevron_left</span>
          <select><option value="6">6月</option></select>
          <span class="material-icons">chevron_right</span>
        </div>
        <p class="money__summary__amount">200,000円</p>
        <ul class="money__summary__detail">
          <li><span>個人：</span>100000円</li>
          <li><span>家庭：</span>100000円</li>
        </ul>
      </div>
      <div class="money__graf"></div>
      <div class="money__calendar">
      </div>
    </div>
    <div class="money__list">
      <table>
        <thead>
          <tr>
            <th>日時</th>
            <th>利用場所</th>
            <th>金額</th>
            <th>支払い方法</th>
            <th>分類</th>
            <th>内訳</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="date" value="2022-06-30" /></td>
            <td><input type="text" value="ローソン" /></td>
            <td><input type="number" value="20000" /></td>
            <td>
              <select id="" name="">
                <option>ビューカード</option>
              </select>
            </td>
            <td>
              <select id="" name="">
                <option>個人</option>
              </select>
            </td>
            <td><button class="c-list-button">内訳</button></td>
          </tr>
        </tbody>
      </table>
      <div class="money__list__add-button-block">
        <button class="money__list__add-button">
          追記
          <span class="material-icons">add_circle_outline</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>
.money {
  width: 100%;
  &__upper {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  &__summary{
    height: 250px;
    width: 30%;
    padding: 10px 20px;
    box-shadow: $block-box-shadow;
    border: 1px solid #eee;
    p{
      padding: 15px 0;
    }
    &__year{
      text-align: center;
    }
    &__month{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      span{
        width: 50px;
        text-align: center;
        cursor: pointer;
      }
    }
    &__amount{
      font-size: 2rem;
      text-align: center;
    }
    &__detail{
      text-align: center;
      li{
        margin: 0 auto;
        padding: 2px;
        border-bottom:1px dotted #000;
        width: 70%;
        span{
          display: inline-block;
          width: 50px;
        }
      }
    }
  }
  &__graf {
    height: 250px;
    width: 30%;
    background-color: red;
  }
  &__calendar {
    height: 250px;
    width: 30%;
    background-color: blue;
  }
  &__list {
    width: 100%;
    margin: 15px auto;
    table {
      font-size: 0.8rem;
      thead {
        background-color: $main-color;
        color: #ffffff;
        th {
          padding: 10px 5px;
        }
      }
      tbody {
        tr {
          border-bottom: 1px dotted #000000;
          td {
            padding: 5px;
          }
        }
      }
      width: 100%;
    }
    &__add-button-block {
      display: flex;
      justify-content: flex-end;
      button {
        width: fit-content;
        color: #ffffff;
        display: flex;
        border-radius: 25px;
        align-items: center;
        margin-top: 5px;
        padding: 5px 20px;
        background-color: $main-color;
        cursor: pointer;
      }
    }
  }
}
</style>
