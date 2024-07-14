var data1;
var key;
let sumArray = [];
var data2;
var data3;
var data4;
var data5;
let array0 = [];
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
var AllArrays = [];
var arr;
var tableContainer = document.getElementById("tableContainer");

async function getCustomerData(searchKey) {
  $(".loading").fadeIn(300);
  var response1 = await fetch(`http://localhost:3000/0`);
  var response2 = await fetch(`http://localhost:3000/1`);
  var response3 = await fetch(`http://localhost:3000/2`);
  var response4 = await fetch(`http://localhost:3000/3`);
  var response5 = await fetch(`http://localhost:3000/4`);

  data1 = await response1.json();
  data2 = await response2.json();
  data3 = await response3.json();
  data4 = await response4.json();
  data5 = await response5.json();
  arr = [];
  arr.push(data1);
  arr.push(data2);
  arr.push(data3);
  arr.push(data4);
  arr.push(data5);

  array0 = [
    arr[0].transactions[0].amount,
    arr[0].transactions[1].amount,
    arr[0].transactions[2].amount,
    arr[0].transactions[3].amount,
  ];
  let sum = 0;
  for (let i = 0; i < array0.length; i++) {
    sum += array0[i];
  }

  array1 = [
    arr[1].transactions[0].amount,
    arr[1].transactions[1].amount,
    arr[1].transactions[2].amount,
  ];
  let sum1 = 0;
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }

  array2 = [
    arr[2].transactions[0].amount,
    arr[2].transactions[1].amount,
    arr[2].transactions[2].amount,
  ];
  let sum2 = 0;
  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }

  array3 = [
    arr[3].transactions[0].amount,
    arr[3].transactions[1].amount,
    arr[3].transactions[2].amount,
  ];
  let sum3 = 0;
  for (let i = 0; i < array3.length; i++) {
    sum3 += array3[i];
  }

  array4 = [
    arr[4].transactions[0].amount,
    arr[4].transactions[1].amount,
    arr[4].transactions[2].amount,
  ];
  let sum4 = 0;
  for (let i = 0; i < array4.length; i++) {
    sum4 += array4[i];
  }

  array5 = [
    arr[3].transactions[0].amount,
    arr[3].transactions[1].amount,
    arr[3].transactions[2].amount,
  ];
  let sum5 = 0;
  for (let i = 0; i < array5.length; i++) {
    sum5 += array5[i];
  }
  AllArrays.push(array0, array1, array2, array3, array4, array5);
  sumArray.push(sum, sum1, sum2, sum3, sum4, sum5);

  displayTable(arr);
  displaySerachInputs();
  $(".loading").fadeOut(300);
}

$(function () {
  $(".loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
  });
});

function displayTable(arr) {
  $("table").toggleClass("d-none");
  let cartoona = "";
  for (let i = 0; i < arr.length; i++) {
    cartoona += `<tr >
              <th class="pointer" scope="row">${arr[i].id}</th>
              <td >${arr[i].name}</td>
              <td>${arr[i].transactions.length}</td>
              <td>${sumArray[i]}</td>
              
            </tr>
  `;
  }

  $("#mainBTN").hide();
  $("#Header").html("Customer Details");
  $(".details").toggleClass("d-none");
  tableContainer.innerHTML = cartoona;
  $(".caption").toggleClass("d-none");
  var test = document.querySelectorAll("th");

  test[4].addEventListener("click", function (e) {
    tag = e.target.innerHTML;
    displayGraph(tag);
  });
  test[5].addEventListener("click", function (e) {
    tag = e.target.innerHTML;
    displayGraph(tag);
  });
  test[6].addEventListener("click", function (e) {
    tag = e.target.innerHTML;
    displayGraph(tag);
  });
  test[7].addEventListener("click", function (e) {
    tag = e.target.innerHTML;
    displayGraph(tag);
  });
  test[8].addEventListener("click", function (e) {
    tag = e.target.innerHTML;
    displayGraph(tag);
  });
}

function displaySerachInputs() {
  $(".search-container").html(`<div class="col-md-6 position-relative">
            <div class="input-group mb-3">
              <input
                onkeyup="displayByName()"
                id="inputName"
                type="text"
                class="form-control bg-transparent text-white"
                placeholder="Search By Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group mb-3">
              <input
                onkeyup="displayByAmount()"
                id="inputAmount"
                type="number"
                class="form-control bg-transparent text-white"
                placeholder="Search By Amount"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              
            </div>
          </div>`);
}

function displayByName() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputName");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function displayByAmount() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputAmount");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

async function displayGraph(key) {
  $(".loading").fadeIn(300);
  var dateresponse = await fetch(`http://localhost:3000/${key}`);
  date1 = await dateresponse.json();

  $("table").hide();
  $(".search-container").hide();
  $(".caption").toggleClass("d-none");
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        date1.transactions[0].date,
        date1.transactions[1].date,
        date1.transactions[2].date,
      ],
      datasets: [
        {
          label: "Transactions",
          data: AllArrays[key],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  $(".loading").fadeOut(300);
}

$("table").toggleClass("d-none");
