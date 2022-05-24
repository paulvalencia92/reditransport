<!doctype html>
<html lang="es">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

    <style>
        .tg-0pky {
            word-break: break-all;
        }
    </style>
</head>
<body>
<div class="container-fluid">
    <table width="100%" class="table table-bordered table-hover table-sm  mt-4">
        <thead>
        <tr>
            <th class="tg-0pky" colspan="12" rowspan="3">CHEQUEO PREOPERACIONAL</th>
            <th class="tg-0pky" colspan="3">CODIGO: F-GT-04</th>
        </tr>
        <tr>
            <th class="tg-0pky" colspan="3">VERSION: 00</th>
        </tr>
        <tr>
            <th class="tg-0lax" colspan="3">Pagina 1 de 1</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th class="tg-0pky" colspan="3" rowspan="2">INFORMACION GENERAL</th>
            <td class="tg-0pky" colspan="6"><b>FECHA:</b> {{ $data->date }}</td>
            <td class="tg-0pky" colspan="6"><b>PLACA:</b> {{ $data->car_plate }}</td>
        </tr>
        <tr>
            <td class="tg-0pky" colspan="6"><b>No INTERNO:</b>{{ $data->internal_number }}</td>
            <td class="tg-0pky" colspan="6"><b>MODALIDAD:</b> {{ $data->modalidad }}</td>
        </tr>
        <tr>
            <td class="tg-0pky" colspan="8"><b>CONDUCTOR RESPONSABLE:</b> {{ $data->driver }}</td>
            <td class="tg-0pky" colspan="7"><b>LUGAR:</b> {{ $data->place }}</td>
        </tr>
        <tr>
            <td class="tg-0pky bg-light" colspan="1" rowspan="2">DESCRIPCION</td>
            <td class="tg-0pky bg-danger" colspan="2">L</td>
            <td class="tg-0pky bg-danger" colspan="2">M</td>
            <td class="tg-0pky bg-danger" colspan="2">MI</td>
            <td class="tg-0pky bg-danger" colspan="2">J</td>
            <td class="tg-0pky bg-danger" colspan="2">V</td>
            <td class="tg-0pky bg-danger" colspan="2">S</td>
            <td class="tg-0pky bg-danger" colspan="2">D</td>
        </tr>
        <tr>
            <td class="tg-0pky bg-light">B</td>
            <td class="tg-0pky bg-light">M</td>
            <td class="tg-0pky bg-light">B</td>
            <td class="tg-0pky bg-light">M</td>
            <td class="tg-0pky bg-light">B</td>
            <td class="tg-0pky bg-light">M</td>
            <td class="tg-0pky bg-light">B</td>
            <td class="tg-0pky bg-light">M</td>
            <td class="tg-0pky bg-light">B</td>
            <td class="tg-0pky bg-light">M</td>
            <td class="tg-0pky bg-light">B</td>
            <td class="tg-0pky bg-light">M</td>
            <td class="tg-0pky bg-light">B</td>
            <td class="tg-0pky bg-light">M</td>
        </tr>
        @foreach($data->items as $item)
            <tr>
                <td style="font-size: 12px" class="tg-0pky">{{ $item['title'] }}</td>
                @foreach($item['subitems'] as $subitem)
                    @if($subitem['b'])
                        <td class="tg-0pky">X</td>
                        <td class="tg-0pky"></td>
                    @else
                        <td class="tg-0pky"></td>
                        <td class="tg-0pky">X</td>
                    @endif

                @endforeach
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
</body>
</html>
