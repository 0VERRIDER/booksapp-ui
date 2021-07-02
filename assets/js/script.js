let  table = document.getElementsByTagName("table")[0];
let tbody = document.createElement("tbody");

fetchData();
async function fetchData() {
  let response = await fetch("https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3");
  console.log(response.status);
  console.log(response.statusText);
  tbody.innerHTML = '';
  let data = await response.text()+"}";
  populate(JSON.parse(data)['clients']);
   
  };
 
  function populate(data){
    

    for (var i = 0; i < data.length; i++){
        let row = ` <tr>
        <th scope="row" class="text-primary">
          ${data[i]['id']}
        </th>
        <td>
        ${data[i]['name']}
        </td>
        <td>
        ${data[i]['company']}
        </td>
        <td>
        ${data[i]['orderId']}

        </td>
        <td>
          $${data[i]['invoicepaid']}
        </td>
        <td>
        $${data[i]['invoicePending']}
        </td>
        <td>
          <i class="fa fa-money-check-alt "></i>
        </td>
      </tr>
      `;
    
        tbody.innerHTML += row; 

    }
    table.appendChild(tbody);

}