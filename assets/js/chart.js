/**
 * Reusable Chart.js initialization functions
 */

/**
 * Creates a bar chart using Chart.js
 * @param {string} canvasId - The ID of the canvas element
 * @param {Array} labels - Array of labels for the x-axis
 * @param {Array} datasets - Array of dataset objects for the chart
 * @param {Object} options - Additional Chart.js options
 */
function createBarChart(canvasId, labels, datasets, options = {}) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) {
    console.error(`Canvas element with ID '${canvasId}' not found.`);
    return null;
  }

  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return 'Rp ' + value.toLocaleString('id-ID');
          },
        },
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: mergedOptions,
  });
}

/**
 * Creates a line chart using Chart.js
 * @param {string} canvasId - The ID of the canvas element
 * @param {Array} labels - Array of labels for the x-axis
 * @param {Array} datasets - Array of dataset objects for the chart
 * @param {Object} options - Additional Chart.js options
 */
function createLineChart(canvasId, labels, datasets, options = {}) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) {
    console.error(`Canvas element with ID '${canvasId}' not found.`);
    return null;
  }

  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: mergedOptions,
  });
}

/**
 * Creates a pie chart using Chart.js
 * @param {string} canvasId - The ID of the canvas element
 * @param {Array} labels - Array of labels for the pie slices
 * @param {Array} data - Array of data values
 * @param {Array} backgroundColors - Array of background colors
 * @param {Object} options - Additional Chart.js options
 */
function createPieChart(canvasId, labels, data, backgroundColors, options = {}) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) {
    console.error(`Canvas element with ID '${canvasId}' not found.`);
    return null;
  }

  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pie Chart',
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors,
      }],
    },
    options: mergedOptions,
  });
}
