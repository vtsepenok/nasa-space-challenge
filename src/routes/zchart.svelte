<script>
  import { onMount, afterUpdate } from 'svelte';
  import Chart from 'chart.js/auto';
  
  let chart;
  let ctx;
  export let observations;
  
  $: chartData = {
    labels: observations.map(obs => `${obs.year}-${obs.days_since} ${obs.hour}:${obs.minute}`),
    datasets: [{
      label: 'bZ',
      borderColor: 'green',
      data: observations.map(obs => obs.bZ),
      fill: false
    }]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  onMount(() => {
    if (ctx) {
      chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: options
      });
    }
  });

  afterUpdate(() => {
    console.log(observations);
    if (chart) {
      chart.data = chartData;
      chart.update();
    }
  });
</script>

<canvas bind:this={ctx}></canvas>