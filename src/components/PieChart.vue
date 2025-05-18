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

// Register only the required components
ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'DonutChart',
  components: {
    Pie
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: 'Вазъи ҳуқуқӣ',
            backgroundColor: ['#10B981', '#FFAFA3'],
            data: [70, 30]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        cutout: '50%', // 👈 Makes it a ring chart
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
