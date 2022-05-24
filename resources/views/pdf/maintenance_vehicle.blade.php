<!doctype html>
<html lang="es">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
<body>
<table class="table table-bordered table-hover table-sm  mt-4">
    <thead class="bg-light">
    <tr>
        <th colspan="3" rowspan="3">INVENTARIO MANTENIMIENTO DE VEHICULOS</th>
        <th colspan="3">CODIGO: F-GT-03</th>
    </tr>
    <tr>
        <th colspan="3">VERSION: 00</th>
    </tr>
    <tr>
        <th colspan="3">Pagina: 1 de 1</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th class="bg-light">VEHÍCULO</th>
        <td>{{ $data->type }}</td>
        <th class="bg-light">PLACA</th>
        <td>{{ $data->car_plate }}</td>
        <td class="bg-light">KM> <b>{{ $data->km}}</b></td>
        <td class="bg-light">FECHA: <b>{{ $data->date }}</b></td>
    </tr>
    <tr>
        <th class="bg-light">CONDUCTOR:</th>
        <td colspan="5">{{ $data->driver }}</td>
    </tr>
    <tr>
        <th class="bg-light">PASE No:</th>
        <td>{{ $data->pase }}</td>
        <th class="bg-light">VENCE:</th>
        <td>{{ $data->vence }}</td>
        <th class="bg-light">CATEGORÍA</th>
        <td>{{ $data->categoria }}</td>
    </tr>
    <tr>
        <th class="bg-light">FECHA</th>
        <th class="bg-light" colspan="2">DESCRIPCION DEL TRABAJO</th>
        <th class="bg-light">KM</th>
        <th class="bg-light" colspan="2">VALOR SERVICIO</th>
    </tr>

    @foreach($data->items as $item)
        <tr>
            <td>{{ $item['fecha'] }}</td>
            <td colspan="2">{{ $item['descripcion'] }}</td>
            <td>{{ $item['km'] }}</td>
            <td colspan="2">{{ $item['valor_servicio'] }}</td>
        </tr>
    @endforeach
    </tbody>
</table>

</body>
</html>
