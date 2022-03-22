var tableData = document.createElement("div");
tableData.setAttribute("class", "tableData");

//   optdiv.innerHTML = " ";
var request = new XMLHttpRequest();
var url = "https://restcountries.com/v3.1/all";

request.open("GET", url, true);
request.send();

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(data);

  var table = document.createElement("table");
  table.setAttribute("class", "dataTable");
  table.id = "DataTable";

  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");

  var tr1 = document.createElement("tr");
  var th1 = document.createElement("th");
  th1.innerHTML = "Capital";

  var th2 = document.createElement("th");
  th2.innerHTML = "Flag";

  for (let i = 0; i < data.length; i++) {
    let tr2 = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = data[i].capital;
    let img = document.createElement("img");
    img.className = "img-thumbnail";
    img.src = data[i].flags.png;
    let td2 = document.createElement("td");
    td2.append(img);

    document.body.append(tableData);
    tableData.append(table);
    table.append(thead, tbody);
    thead.append(tr1);
    tr1.append(th1, th2);
    tr2.append(td1, td2);
    tbody.append(tr2);
  }
};
