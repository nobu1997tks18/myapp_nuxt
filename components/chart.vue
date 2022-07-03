<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: this.chartLabels,
        datasets: [ { data: this.chartDataset } ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },
  props: {
    chartLabels: {
      type: Array,
      default:  [ '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    },
    chartDataset: {
      type:Array,
      default: []
    }
  }
}
</script>