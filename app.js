// https://calculator.swiftutors.com/cost-performance-index-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costPerformanceIndexRadio = document.getElementById('costPerformanceIndexRadio');
const earnedValueRadio = document.getElementById('earnedValueRadio');
const actualCostRadio = document.getElementById('actualCostRadio');

let costPerformanceIndex;
let earnedValue = v1;
let actualCost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costPerformanceIndexRadio.addEventListener('click', function() {
  variable1.textContent = 'Earned Value';
  variable2.textContent = 'Actual Cost';
  earnedValue = v1;
  actualCost = v2;
  result.textContent = '';
});

earnedValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost Performance Index';
  variable2.textContent = 'Actual Cost';
  costPerformanceIndex = v1;
  actualCost = v2;
  result.textContent = '';
});

actualCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost Performance Index';
  variable2.textContent = 'Earned Value';
  costPerformanceIndex = v1;
  earnedValue = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costPerformanceIndexRadio.checked)
    result.textContent = `Cost Performance Index = ${computeCostPerformanceIndex().toFixed(2)}`;

  else if(earnedValueRadio.checked)
    result.textContent = `Earned Value = ${computeEarnedValue().toFixed(2)}`;

  else if(actualCostRadio.checked)
    result.textContent = `Actual Cost = ${computeActualCost().toFixed(2)}`;
})

// calculation

function computeCostPerformanceIndex() {
  return Number(earnedValue.value) / Number(actualCost.value);
}

function computeEarnedValue() {
  return Number(costPerformanceIndex.value) * Number(actualCost.value);
}

function computeActualCost() {
  return Number(earnedValue.value) / Number(costPerformanceIndex.value);
}