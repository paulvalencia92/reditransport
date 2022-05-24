<!DOCTYPE html>

<head>
</head>
<body>
<table style="width: 100%; border-collapse: collapse; border: solid rgb(255, 255, 255); margin-bottom: .2cm">
    <tbody>
    <tr>
        <td style="width: 50%; border: solid rgb(255, 255, 255);">
            <img src="{{ $movilidad }}" alt="{{asset('/images/pdf/movilidad.png')}}" style="max-width: 320px">
        </td>
        <td style="width: 10%; border: solid rgb(255, 255, 255);">
            <img src="{{ $supertransport }}" alt="" style="max-width: 90px">
        </td>
        <td style="width: 40%; border: solid rgb(255, 255, 255);">
            <img src="{{ $logo }}" alt="" style="max-width: 150px">
        </td>
    </tr>
    </tbody>
</table>
<p style="text-align: center;"><span
            style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56); margin-top:-30px">FORMATO ÚNICO DEL EXTRACTO DE CONTRATO DEL SERVICIO PÚBLICO DE <br> TRANSPORTE TERRESTRE AUTOMOTOR ESPECIAL</span>
</p>
<p style="text-align: center;"><span
            style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)"><b>#{{$codigo}}</b></span>
</p>

<table style="width: 100%; border-collapse: collapse; border: solid rgb(255, 255, 255);">
    <tbody>
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            RAZÓN SOCIAL EMPRESA TRANSP. ESPECIAL:
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            {{env('COMP_NAME')}}
        </td>
    </tr>
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            NIT:
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            {{env('COMP_NIT')}}
        </td>
    </tr>
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            CONTRATO No:
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            {{$data->id}}
        </td>
    </tr>
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            CONTRATANTE:
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            {{ $data->contractor->contractor }}
        </td>
    </tr>
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            NIT/CC:
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            {{ $data->contractor->nit }}
        </td>
    </tr>
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            OBJETO DE CONTRATO
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            {{ $data->object }}
        </td>
    </tr>
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            ORIGEN - DESTINO
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            @if($data->routes)
                {{$data->routes[0]->from}} - {{$data->routes[0]->to}}
            @endif
        </td>
    </tr>
    @if($data->convenio)
    <tr>
        <td style="width: 60%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            CONVENIO DE COLABORACIÓN
        </td>
        <td style="width: 40%; font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            {{ $data->convenio }}
        </td>
    </tr>
    @endif
    </tbody>
</table>

<p style="text-align: center; margin-top:20px"><span
            style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)"><b>VIGENCIA DEL CONTRATO</b></span>
</p>
<table style="width: 100%; border-collapse: collapse; border: 0.5px solid rgb(56,56,56);">
    <tbody>
    <tr>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)"></span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Dia</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Mes</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Año</span>
            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">FECHA INICIAL</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{\Carbon\Carbon::parse($data->start_date)->format('d')}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{\Carbon\Carbon::parse($data->start_date)->format('m')}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{\Carbon\Carbon::parse($data->start_date)->format('Y')}}</span>
            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">FECHA VENCIMIENTO</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{\Carbon\Carbon::parse($data->end_date)->format('d')}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{\Carbon\Carbon::parse($data->end_date)->format('m')}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{\Carbon\Carbon::parse($data->end_date)->format('Y')}}</span>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<p style="text-align: center; margin-top:20px"><span
            style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)"><b>CARACTER&Iacute;STICAS VEH&Iacute;CULO</b></span>
</p>
<table style="width: 100%; border-collapse: collapse; border: 0.5px solid rgb(56,56,56);">
    <tbody>
    <tr>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">PLACA</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">MODELO</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">MARCA</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">CLASE</span>
            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{$data->vehicle->car_plate}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{$data->vehicle->model}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{$data->vehicle->brand}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{$data->vehicle->auto_type}}</span>
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="2" style="width: 49.8498%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">N&Uacute;MERO INTERNO</span>
            </div>
        </td>
        <td colspan="2" style="width: 49.8498%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">N&Uacute;MERO TARJETA OPERACI&Oacute;N</span>
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="2" style="width: 49.8498%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->vehicle->internal_number }}</span>
            </div>
        </td>
        <td colspan="2" style="width: 49.8498%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->vehicle->operation_card }}</span>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<p style="text-align: center;"><span
            style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)"><b>RESPONSABLE</b></span>
</p>
<table style="width: 100%; border-collapse: collapse; border: 0.5px solid rgb(56,56,56);">
    <tbody>
    <tr>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">TIPO</span>
            </div>
        </td>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">NOMBRES Y APELLIDOS</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">NUM CEDULA</span>
            </div>
        </td>
        <td style="width: 20%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">TELEF&Oacute;NO</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">DIRECCI&Oacute;N</span>
            </div>
        </td>
    </tr>
    <tr>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Conductor 1</span>
            </div>
        </td>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user->names }} {{ $data->user->surnames }}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user->identification_number}}</span>
            </div>
        </td>
        <td style="width: 20%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user->phone_number}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user->residence_address }}</span>
            </div>
        </td>
    </tr>
    @if($data->user_second)
    <tr>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Conductor 2</span>
            </div>
        </td>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_second->names }} {{ $data->user_second->surnames }}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_second->identification_number}}</span>
            </div>
        </td>
        <td style="width: 20%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_second->phone_number}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_second->residence_address }}</span>
            </div>
        </td>
    </tr>
    @endif
    @if($data->user_third)
    <tr>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Conductor 3</span>
            </div>
        </td>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_third->names }} {{ $data->user_third->surnames }}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_third->identification_number}}</span>
            </div>
        </td>
        <td style="width: 20%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_third->phone_number}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_third->residence_address }}</span>
            </div>
        </td>
    </tr>
    @endif
    @if($data->user_four)
    <tr>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Conductor 4</span>
            </div>
        </td>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_four->names }} {{ $data->user_four->surnames }}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_four->identification_number}}</span>
            </div>
        </td>
        <td style="width: 20%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_four->phone_number}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->user_four->residence_address }}</span>
            </div>
        </td>
    </tr>
    @endif
    <tr>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">Responsable del Contratante</span>
            </div>
        </td>
        <td style="width: 30%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->contractor->c_name }} {{ $data->contractor->c_last_name }}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->contractor->c_cc}}</span>
            </div>
        </td>
        <td style="width: 20%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->contractor->c_phone}}</span>
            </div>
        </td>
        <td style="width: 25%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">{{ $data->contractor->c_adress }}</span>
            </div>
        </td>
    </tr>
    </tbody>
</table>
<table style="width: 100%; border-collapse: collapse; border: 0.5px solid rgb(56,56,56);margin-top:10px">
    <tbody>
    <tr>
        <td style="width: 50%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(56,56,56)">
                  <div>{{env('COMP_NAME')}}, Datos de contacto</div>
                  <div>Tels {{env('COMP_TEL')}} - {{env('COMP_TEL2')}}</div>
                  <div>Email {{env('COMP_MAIL')}} </div>
                </span></div>
        </td>
        <td style="width: 50%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;"><span
                        style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
                  <img src="{{ $firma }}" alt="" style="max-height: 100px; margin-top:20px">
                </span></div>
        </td>
    </tr>
    </tbody>
</table>
<table style="width: 100%; margin-top:10px; border-collapse: collapse; border: 0.5px solid rgb(56,56,56);">
    <tbody>
    <tr>
        <td style="width: 35%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;">
                  <span style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(56,56,56)">
                    <div>
                      Extracto valido desde: {{ \Carbon\Carbon::now()->format('Y-m-d') }}
                    </div>
                    <div>
                      Extracto valido hasta: {{ \Carbon\Carbon::now()->addDays('7')->format('Y-m-d') }}
                    </div>
                  </span>
            </div>
        </td>
        <td style="width: 15%; border: 0.5px solid rgb(56,56,56);">
            {{-- <div style="text-align: center;"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 13px;text-transform:uppercase; color: rgb(56,56,56)">
            </span></div> --}}
            <img src="data:image/png;base64, {!! $qr !!}" style="width: 50px; height: 50px; margin-left: 20px">
        </td>
        <td style="width: 35%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;">
                  <span style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(56,56,56)">
                    <a href="{{env('APP_URL') . 'pdf/'.$data->id}}">{{env('APP_URL') . 'pdf/'.$data->id}}</a>
                  </span>
                  <div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(56,56,56)">
                    Se solicita a las autoridades escanear el código o dirigirse al link para validar el extracto
                </div>
            </div>
        </td>
        <td style="width: 15%; border: 0.5px solid rgb(56,56,56);">
            <div style="text-align: center;">
                <img src="{{ $supertransport }}" alt="" style="max-width: 100px">
            </div>
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>
