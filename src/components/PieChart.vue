<template>
  <div>
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'DonutChart',
  components: {
    Pie
  },
  props: {
    proportions: {
      type: Array,
      required: true,
      validator: (value) => value.length === 2 && value.every(v => typeof v === 'number')
    }
  },
  computed: {
    chartData() {
      return {
        datasets: [
          {
            label: 'Вазъи ҳуқуқӣ',
            backgroundColor: ['#10B981', '#FFAFA3'],
            data: this.proportions
          }
        ]
      }
    }
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        cutout: '50%',
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: false
          }
        }
      }
    }
  }
}
</script>
