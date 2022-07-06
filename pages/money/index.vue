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
          <p class="money__left__summary__amount">{{thisExpenceSum}}円</p>
          <ul class="money__left__summary__detail">
            <li><span>個人：</span>100000円</li>
            <li><span>家庭：</span>100000円</li>
            <li><span>収支：</span>100000円</li>
          </ul>
        </div>
        <div class="money__left__chart">
          <Chart
            :styles="chartStyles"
            :chartLabels="thisMonthDate"
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
                  <button class="c-list-button money__left__list__detail">内訳</button>
                  <button @click="deleteListData(expence.id, 'expenceData')" class="c-list-button money__left__list__delete">削除</button>
                  </td>
              </tr>
            </tbody>
          </table>
          <div class="money__left__list__add-button-block">
            <button class="money__left__list__add-button" @click="addExpenceList()">
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
          :styles="chartStyles"
          :chartLabels="monthArray"
          :chartDataset="data1"
        />
      </div>
      <div class="money__right__list">
        <div class="money__right__toggle">
          <div class="money__right__toggle__title" @click="openListTable('fixedExpenceTable')">
            <p>固定費</p>
          </div>
          <div id="fixedExpenceTable" class="money__right__toggle__table">
            <table class="l-default-table">
              <thead>
                <tr>
                  <th>項目名</th>
                  <th>支払方法</th>
                  <th>支出分類</th>
                  <th>商品分類</th>
                  <th class="button-th"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="fixedExpence in fixedExpenceData">
                  <td>
                    <input type="text" v-model="fixedExpence.title">
                  </td>
                  <td>
                    <select id="" name="" v-model="fixedExpence.payment_method">
                      <option value="1">ビューカード</option>
                      <option value="2">三井住友</option>
                      <option value="3">現金</option>
                    </select>
                  </td>
                  <td>
                    <select id="" name="" v-model="fixedExpence.payment_type">
                      <option value="1">個人</option>
                      <option value="2">家庭</option>
                      <option value="3">その他</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="fixedExpence.item_type">
                      <option value="1">交通費</option>
                    </select>
                  </td>
                  <td class="button-td">
                    <button @click="deleteListData(fixedExpence.id, 'fixedExpenceData')" class="c-list-button money__right__toggle__button">削除</button>
                    </td>
                </tr>
              </tbody>
            </table>
            <button class="c-list-button money__right__toggle__addbutton" @click="addFixedExpenceList()">追加</button>
          </div>
        </div>
        <div class="money__right__toggle">
          <div class="money__right__toggle__title" @click="openListTable('paymentMethodTable')">
            <p>支払方法</p>
          </div>
          <div id="paymentMethodTable" class="money__right__toggle__table">
            <table class="l-default-table">
              <thead>
                <tr>
                  <th>項目名</th>
                  <th>サイクル</th>
                  <th class="button-th"></th>
                </tr>
              </thead>
              <tbody v-for="paymentmethod in paymentMethodData">
                <tr>
                  <td><input type="text" v-model="paymentmethod.title"></td>
                  <td><select v-model="paymentmethod.cycle"><option value="翌月">翌月</option></select></td>
                  <td class="button-td">
                    <button  @click="deleteListData(paymentmethod.id, 'paymentMethodData')" class="c-list-button money__right__toggle__button">削除</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="c-list-button money__right__toggle__addbutton" @click="addPaymentMethodList()">追加</button>
          </div>
        </div>
        <div class="money__right__toggle">
          <div class="money__right__toggle__title" @click="openListTable('paymentTypeTable')">
            <p>支払分類</p>
          </div>
          <div id="paymentTypeTable" class="money__right__toggle__table">
            <table class="l-default-table">
              <thead>
                <tr>
                  <th>項目名</th>
                  <th class="button-th"></th>
                </tr>
              </thead>
              <tbody v-for="paymentType in paymentTypeData">
                <tr>
                  <td><input type="text" v-model="paymentType.title"></td>
                  <td class="button-td">
                    <button @click="deleteListData(paymentType.id, 'paymentTypeData')" class="c-list-button money__right__toggle__button">削除</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="c-list-button money__right__toggle__addbutton" @click="addPaymentTypeList()">追加</button>
          </div>
        </div>
        <div class="money__right__toggle">
          <div class="money__right__toggle__title" @click="openListTable('itemTypeTable')">
            <p>商品分類</p>
          </div>
          <div id="itemTypeTable" class="money__right__toggle__table">
            <table class="l-default-table">
              <thead>
                <tr>
                  <th>項目名</th>
                  <th>カラー</th>
                  <th class="button-th"></th>
                </tr>
              </thead>
              <tbody v-for=" itemType in itemTypeData">
                <tr>
                  <td><input type="text" v-model="itemType.title"></td>
                  <td><input type="color" v-model="itemType.color"></td>
                  <td class="button-td">
                    <button  @click="deleteListData(itemType.id, 'itemTypeData')" class="c-list-button money__right__toggle__button">削除</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="c-list-button money__right__toggle__addbutton" @click="addItemTypeList()">追加</button>
          </div>
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
      monthArray: [ '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      data1:[20000],
      data2: [ 20000 ],
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
          title: "定期代",
          payment_method: 1,
          payment_type: 1,
          item_type: 1,
        }
      ],
      paymentMethodData: [
        {
          id: 1,
          title: "ビューカード",
          cycle: "翌月",
        }
      ],
      paymentTypeData: [
        {
          id: 1,
          title: "個人",
        }
      ],
      itemTypeData: [
        {
          id: 1,
          title: "食費",
          color: "#eeeeee",
        }
      ],
      today: new Date(),
      year: new Date().getFullYear(),
      month: new Date().getMonth() +1,
    }
  },
  computed: {
    chartStyles(){
      return{
        width: `90%`,
        padding: '5px 5px 5px 0',
        position:'relative'
      }
    },
    thisMonthDate: function (){
      let calcDate = new Date( this.year, this.month, 1);
      let result = [];
      while ( calcDate.getMonth() <= this.month ){
        result.push( calcDate.getDate() );
        calcDate = new Date( calcDate.setDate( calcDate.getDate() + 1 ) );
      };
      return result;
    },
    thisExpenceSum: function ()
    {
      let result = 0;
      for ( let i = 0; i < this.expenceData.length; i++ )
      {
        result += this.expenceData[ i ].price;
      }
      return result;
    }
  },
  methods: {
    addExpenceList: function ()
    {
      this.expenceData.push( {
        id: "",
        date: "",
        place: "",
        price: 0,
        payment_method: 0,
        payment_type: 0
      } );
    },
    addFixedExpenceList: function ()
    {
      this.fixedExpenceData.push( {
        id: "",
        title: "",
        payment_method: 0,
        payment_type: 0,
        item_type: 0,
      } );
    },
    addPaymentMethodList: function ()
    {
      this.paymentMethodData.push( {
        id: "",
        title: "",
        cycle: "",
      } );
    },
    addPaymentTypeList: function ()
    {
      this.paymentTypeData.push( {
        id: "",
        title: "",
      } );
    },
    addItemTypeList: function ()
    {
      this.itemTypeData.push({
          id: 1,
          title: "",
          color: "",
      });
    },
    deleteListData: function (id, dataArray)
    {
      this[dataArray] = this[dataArray].filter( function ( data )
      {
        return data.id !== id;
      });
    },
    openListTable: function (text)
    {
      let table_block = document.getElementById( text );
      if ( table_block.style.display == "flex"){
        table_block.style.display = "none";
      } else{
        table_block.style.display = "flex";
      }
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
          padding: 2px 10px;
          background-color: $main-color;
          font-size: 0.8rem;
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
      &__title{
        padding: 10px 20px;
        background-color: #707070;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
      &__table{
        display: none;
        flex-direction: column;
        align-items: end;
      }
      &__addbutton{
        margin-top: 5px;
      }
      &__button{
        background-color: $sub-color;
        color: #fff;
      }
      table{
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
