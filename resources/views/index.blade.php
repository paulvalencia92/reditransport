<!doctype html>
<html lang="es">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
<body>
<div class="container-fluid">
<table class="table table-bordered table-hover table-sm mt-4">
    <thead class="bg-light">
    <tr>
        <th colspan="3" rowspan="4">INVENTARIO DE RECIBO Y ENTREGA DE VEHICULOS</th>
    </tr>
    <tr>
        <th>CODIGO: F - GT - 03</th>
    </tr>
    <tr>
        <th>VERSION: 00</th>
    </tr>
    <tr>
        <th>Pagina: 1 de 1</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="bg-light">Placa</td>
        <td>{{ $data->car_plate }}</td>
        <td class="bg-light">Tipo de vehículo</td>
        <td>{{ $data->type }}</td>
    </tr>
    <tr>
        <td class="bg-light">Conductor</td>
        <td>{{ $data->driver }}</td>
        <td class="bg-light">Licencia de Transito</td>
        <td>{{ $data->license }}</td>
    </tr>
    <tr>
        <td class="bg-light">Kilometraje</td>
        <td>{{ $data->km }}</td>
        <td class="bg-light">SOAT</td>
        <td>{{ $data->soat }}</td>
    </tr>
    <tr>
        <td class="bg-light">Seguro Contractual</td>
        <td>{{ $data->contractual }}</td>
        <td class="bg-light">Seguro extracontractual</td>
        <td>{{ $data->extra_contractual }}</td>
    </tr>
    <tr>
        <td class="bg-light">Extracto Contrato conductor</td>
        <td>{{ $data->extracto_contrato_conductor }}</td>
        <td class="bg-light">Permiso de acceso</td>
        <td>{{ $data->permiso_acceso }}</td>
    </tr>
    <tr>
        <td class="bg-light">Fecha de Entrega</td>
        <td colspan="3">{{ $data->date }}</td>
    </tr>

    @foreach($data->items as $item)

        @if($item['title'] == 'DESCRIPCIÓN' || $item['title'] == 'HERRAMIENTAS')
            <tr>
                <th>{{ $item['title'] }}</th>
                <th>Q</th>
                <th>B</th>
                <th>M</th>
            </tr>

            @foreach($item['subitems'] as $subitem)

                <tr>
                    <td>{{ $subitem['name'] }}</td>
                    <td>{{ $subitem['q'] }}</td>
                    <td>{{ $subitem['b'] }}</td>
                    <td>{{ $subitem['m'] }}</td>
                <tr>

            @endforeach


        @else
            <tr>
                <th>{{ $item['title'] }}</th>
                <th></th>
                <th>Si</th>
                <th>No</th>
            </tr>


            @foreach($item['subitems'] as $subitem)

                <tr>
                    <td>{{ $subitem['name'] }}</td>
                    <td></td>
                    <td>{{ $subitem['si'] }}</td>
                    <td>{{ $subitem['no'] }}</td>
                </tr>



            @endforeach


        @endif

    @endforeach
    </tbody>
</table>
</div>
</body>
</html>
