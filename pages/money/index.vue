<template>
  <div class="money">
    <div class="money__left">
      <div class="money__left__upper">
        <div class="money__left__summary">
          <div class="money__left__summary__year">
            <select><option value="2022">2022年</option></select>
          </div>
          <div class="money__left__summary__month">
            <span class="material-icons">chevron_left</span>
            <select><option value="6">6月</option></select>
            <span class="material-icons">chevron_right</span>
          </div>
          <p class="money__left__summary__amount">200,000円</p>
          <ul class="money__left__summary__detail">
            <li><span>個人：</span>100000円</li>
            <li><span>家庭：</span>100000円</li>
          </ul>
        </div>
        <div class="money__left__chart">
          <Chart
            :styles="myStyles"
            :chartLabels="getThisMonthDate"
            :chartDataset="data2"
          />
        </div>
      </div>
      <div class="money__left__bottom">
        <div class="money__left__list">
          <table class="l-default-table">
            <thead>
              <tr>
                <th>日時</th>
                <th>利用場所</th>
                <th>金額</th>
                <th>支払い方法</th>
                <th>支出分類</th>
                <th>内訳</th>
              </tr>
            </thead>
            <tbody v-for="expence in expenceData">
              <tr>
                <td><input type="date" v-model="expence.date" /></td>
                <td><input type="text" v-model="expence.place" /></td>
                <td><input type="number" v-model="expence.price" /></td>
                <td>
                  <select id="" name="" v-model="expence.payment_method">
                    <option value="1">ビューカード</option>
                    <option value="2">三井住友</option>
                    <option value="3">現金</option>
                  </select>
                </td>
                <td>
                  <select id="" name="" v-model="expence.payment_type">
                    <option value="1">個人</option>
                    <option value="2">家庭</option>
                    <option value="3">その他</option>
                  </select>
                </td>
                <td>
                  <button data-id={{expence.id}} class="c-list-button money__left__list__detail">内訳</button>
                  <button data-id={{expence.id}} class="c-list-button money__left__list__delete">削除</button>
                  </td>
              </tr>
            </tbody>
          </table>
          <div class="money__left__list__add-button-block">
            <button class="money__left__list__add-button" @click="addExpenceListBlock()">
              追記
              <span class="material-icons">add_circle_outline</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="money__right">
      <div class="money__right__chart">
        <Chart
          :styles="myStyles"
          :chartLabels="month"
          :chartDataset="data1"
        />
      </div>
      <div class="money__right__list">
        <div class="money__right__toggle">
          <p class="money__right__toggle__title">固定費</p>
          <table class="l-default-table">
            <thead>
              <tr>
                <th>項目名</th>
                <th>支出分類</th>
                <th>商品分類</th>
                <th class="button-th"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" value="定期"></td>
                <td><select><option value="個人">個人</option></select></td>
                <td><select><option value="交通費">交通費</option></select></td>
                <td class="button-td"><button class="c-list-button money__right__toggle__button">削除</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="money__right__toggle">
          <p class="money__right__toggle__title">支払方法</p>
          <table class="l-default-table">
            <thead>
              <tr>
                <th>項目名</th>
                <th>サイクル</th>
                <th class="button-th"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" value="ビューカード"></td>
                <td><select><option value="交通費">翌月</option></select></td>
                <td class="button-td"><button class="c-list-button money__right__toggle__button">削除</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="money__right__toggle">
          <p class="money__right__toggle__title">支払分類</p>
          <table class="l-default-table">
            <thead>
              <tr>
                <th>項目名</th>
                <th class="button-th"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" value="個人"></td>
                <td class="button-td"><button class="c-list-button money__right__toggle__button">削除</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="money__right__toggle">
          <p class="money__right__toggle__title">商品分類</p>
          <table class="l-default-table">
            <thead>
              <tr>
                <th>項目名</th>
                <th>カラー</th>
                <th class="button-th"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" value="食費"></td>
                <td><input type="color" value="#000000"></td>
                <td class="button-td"><button class="c-list-button money__right__toggle__button">削除</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/chart.vue'
export default {
  components: {
    Chart,
  },
  layout: 'default',
  data (){
    return {
      month: [ '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      data1:[20000],
      data2: [20000],
      expenceData: [
        {
          id: 1,
          date: "2022-07-01",
          place: "ローソン",
          price: 20000,
          payment_method: 1,
          payment_type: 1
        }
      ],
      fixedExpenceData: [
        {
          id: 1,
          title:"定期代",
        }
      ]
    }
  },
  computed: {
    myStyles(){
      return{
        width: `90%`,
        padding: '5px 5px 5px 0',
        position:'relative'
      }
    },
    getThisMonthDate: function (){
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let calcDate = new Date( year, month, 1);
      let result = [];
      while ( calcDate.getMonth() <= month ){
        result.push( calcDate.getDate() );
        calcDate = new Date( calcDate.setDate( calcDate.getDate() + 1 ) );
      };
      return result;
    }
  },
  methods: {
    addExpenceListBlock: function (){
      this.expenceData.push({ id:"",date: "", place: "", "price": 0,"payment_method": 0, "payment_type": 0})
    }
  }
}

</script>

<style lang="scss" scoped>
.money {
  width: 100%;
  display: flex;
  @include mq(sp) {
    flex-direction: column;
  }
  &__left{
    width: 60%;
    @include mq(sp) {
      width: 100%;
    }
    &__upper {
      display: flex;
      justify-content: space-around;
      width: 100%;
      @include mq(sp) {
        flex-direction: column;
      }
    }
    &__summary{
      height: 250px;
      width: 45%;
      padding: 10px 20px;
      box-shadow: $block-box-shadow;
      border: 1px solid #eee;
      @include mq(sp) {
        width: 100%;
      }
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
    &__chart {
      height: 250px;
      width: 45%;
      box-shadow: $block-box-shadow;
      border: 1px solid #eee;
      display: flex;
      justify-content: center;
      @include mq(sp) {
        width: 100%;
      }
    }
    &__list {
      width: 95%;
      margin: 15px auto;
      @include mq(sp) {
        overflow: scroll;
      }
      &__delete{
        background-color: $sub-color;
        color: #ffffff;
      }
      &__detail{
        background-color: $main-color;
        color: #ffffff;
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
  &__right{
    width: 40%;
    @include mq(sp) {
      width: 100%;
    }
    &__chart {
      height: 250px;
      width: 100%;
      box-shadow: $block-box-shadow;
      border: 1px solid #eee;
      display: flex;
      justify-content: center;
    }
    &__toggle{
      width: 100%;
      margin: 15px 0;
      @include mq(sp) {
        overflow: scroll;
      }
      &__button{
        background-color: $sub-color;
        color: #fff;
      }
      &__title{
        padding: 10px 20px;
        background-color: #707070;
        color: #ffffff;
        cursor: pointer;
      }
      table{
        // display: none;
        margin: 0 auto;
        th{
          background-color: #eee;
          color: #000;
        }
      }
    }
  }
}
</style>
