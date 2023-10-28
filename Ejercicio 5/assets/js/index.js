

console.log("Entro a index.js");
//https://dev4humans.com.mx/api/Clases/ventas_libros

fetch("https://dev4humans.com.mx/api/Clases/ventas_libros")
.then(response => response.json())
.then(datosApi => {
    console.log(datosApi);
    const ctx = document.getElementById('myChart');
    const labels = datosApi.data.labels;
    const data = datosApi.data.data;

new Chart(ctx, {
    type: 'bar',
    data: {
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: labels,
        datasets: [{
            label: 'Promedio de ventas diarias',
            //data: [12, 19, 3, 5, 2, 3],
            data: data,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

    tbody.innerHTML ="";
    labels.forEach((label, index) => {
        console.log(index);
       // tbody.innerHTML +=`
       // <tr>
       //     <th>${index + 1}</th>
       //     <th>${label}</th>

       //     <th>${data[index]}</th>
            
        //</tr>`;

        const tr=document.createElement("tr");
        if (data[index]>50){
            tr.classList.add("table-success");
            tr.classList.add("fw-bold");
        }

            tr.innerHTML=`
            <td>${index + 1}</td>
            <td>${label}</td>
            <td>${data[index]}</td>
            `;
            tbody.appendChild(tr);
    });

});


