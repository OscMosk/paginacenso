
google.charts.load('current', { 'packages': ['corechart'] });

GetDataMuni();
llamadaDemo();
llamadaArea();
llamadaComunidad();
llamadaselecmunicipio();
function MydrawChart(hombres, mujres) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['Hombre', hombres],
        ['Mujer', mujres]
    ]);

    var options = {
        title: 'Representacion Grafica de porcentaje'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function llamadaDemo() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

    var url = "https://censopoblacion.gt/indicadores/2/999";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //var divPeli = document.getElementById('divPeli');
            //divPeli.innerHTML = '';

            if (data.length > 0) {
                google.charts.setOnLoadCallback(MydrawChart(data[0].total_sexo_hombre, data[0].total_sexo_mujeres));
                console.log(data[0].total_sexo_hombre);
                var NumHombres = document.getElementById('NumHombres');
                NumHombres.textContent = data[0].total_sexo_hombre;

                document.getElementById('PorHombres').innerText = data[0].porc_sexo_hombre.toFixed(2);

                document.getElementById('NumMujeres').innerText = data[0].total_sexo_mujeres;
                document.getElementById('PorMujres').innerText = data[0].porc_sexo_mujeres.toFixed(2);

            }

        });

}

function MydrawChartarea(hombres, mujres) {

    var data = google.visualization.arrayToDataTable([
        ['Poblacion', 'Total'],
        ['Aréa Urbana', hombres],
        ['Aréa Rural', mujres]
    ]);

    var options = {
        title: 'Representacion Grafica de porcentaje'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechartarea'));

    chart.draw(data, options);
}

function drawChartComunidad(ComuUrbana, ComuRural) {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Aréa Urbana', ComuUrbana],
        ['Aréa Rural', ComuRural]
    ]);

    var options = {
        title: 'Representación Gráfica de Porcentaje',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('Comunidad'));
    chart.draw(data, options);
}


function llamadaArea() {
    //alert("Hola con JavaScript");
    /*Creating an HTML table dynamically
   https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces#creating_an_html_table_dynamically*/
    //uso de Fetch https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

    var url = "https://censopoblacion.gt/indicadores/2/999";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //var divPeli = document.getElementById('divPeli');
            //divPeli.innerHTML = '';

            if (data.length > 0) {
                google.charts.setOnLoadCallback(drawChartComunidad(data[0].total_sector_urbano, data[0].total_sector_rural));
                console.log(data[0].total_sector_urbano);
                var NumHombresarea = document.getElementById('NumHombresarea');

                NumHombresarea.textContent = data[0].total_sector_urbano;
                document.getElementById('PorHombresarea').innerText = data[0].porc_sector_urbano.toFixed(2);

                document.getElementById('NumMujeresarea').innerText = data[0].total_sector_rural;
                document.getElementById('PorMujresarea').innerText = data[0].porc_sector_rural.toFixed(2);

            }

        });

}






function llamadaComunidad() {
    var url = "https://censopoblacion.gt/indicadores/2/999";


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('ComuMaya').innerText = data[0].pob_pueblo_maya.toFixed(2);
            document.getElementById('ComuGarifona').innerText = data[0].pob_pueblo_garifuna.toFixed(2);
            document.getElementById('ComuXinca').innerText = data[0].pob_pueblo_xinca.toFixed(2);
            document.getElementById('ComuLadina').innerText = data[0].pob_pueblo_ladino.toFixed(2);
        });
}






function GetDataMuni() {
    var selectedValue = document.getElementById("cmbUbicacion");
    if (selectedValue != null) {
        var url = "https://censopoblacion.gt/indicadores/2/" + selectedValue.value;
    }
    else {
        var url = "https://censopoblacion.gt/indicadores/2/999";
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.length > 0) {
                google.charts.setOnLoadCallback(MydrawChart(data[0].total_sexo_hombre, data[0].total_sexo_mujeres));
                console.log(data[0].total_sexo_hombre);
                var NumHombres = document.getElementById('NumHombres');
                NumHombres.textContent = data[0].total_sexo_hombre;

                document.getElementById('PorHombres').innerText = data[0].porc_sexo_hombre.toFixed(2);

                document.getElementById('NumMujeres').innerText = data[0].total_sexo_mujeres;
                document.getElementById('PorMujres').innerText = data[0].porc_sexo_mujeres.toFixed(2);

            }

            if (data.length > 0) {
                google.charts.setOnLoadCallback(drawChartComunidad(data[0].total_sector_urbano, data[0].total_sector_rural));
                console.log(data[0].total_sector_urbano);
                var NumHombresarea = document.getElementById('NumHombresarea');

                NumHombresarea.textContent = data[0].total_sector_urbano;
                document.getElementById('PorHombresarea').innerText = data[0].porc_sector_urbano.toFixed(2);

                document.getElementById('NumMujeresarea').innerText = data[0].total_sector_rural;
                document.getElementById('PorMujresarea').innerText = data[0].porc_sector_rural.toFixed(2);

            }

            var divCenso = document.getElementById('divCenso');
            var x = document.getElementById('NumHombres');
            x.innerText = data[0].total_sexo_hombre;

            var divCenso = document.getElementById('divCenso');
            var x1 = document.getElementById('PorHombres');
            x1.innerText = data[0].porc_sexo_hombre;

            var divCenso = document.getElementById('divCenso');
            var z = document.getElementById('NumMujeres');
            z.innerText = data[0].total_sexo_mujeres;

            var divCenso = document.getElementById('divCenso');
            var z1 = document.getElementById('PorMujres');
            z1.innerText = data[0].porc_sexo_mujeres;

            var divCenso = document.getElementById('divCenso');
            var x = document.getElementById('NumHombresarea');
            x.innerText = data[0].total_sector_urbano;

            var divCenso = document.getElementById('divCenso');
            var x1 = document.getElementById('PorHombresarea');
            x1.innerText = data[0].porc_sector_urbano;

            var divCenso = document.getElementById('divCenso');
            var z = document.getElementById('NumMujeresarea');
            z.innerText = data[0].total_sector_rural;

            var divCenso = document.getElementById('divCenso');
            var z1 = document.getElementById('PorMujresarea');
            z1.innerText = data[0].porc_sector_rural;

            //Comunidad
            var divCenso = document.getElementById('divCenso');
            var z1 = document.getElementById('ComuMaya');
            z1.innerText = data[0].pob_pueblo_maya;


            var divCenso = document.getElementById('divCenso');
            var z1 = document.getElementById('ComuGarifona');
            z1.innerText = data[0].pob_pueblo_garifuna;


            var divCenso = document.getElementById('divCenso');
            var z1 = document.getElementById('ComuXinca');
            z1.innerText = data[0].pob_pueblo_xinca;


            var divCenso = document.getElementById('divCenso');
            var z1 = document.getElementById('ComuLadina');
            z1.innerText = data[0].pob_pueblo_ladino;
        });
}
