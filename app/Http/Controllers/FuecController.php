<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contract;
use App\Models\FuecGenerated;
use App\Models\User;
use App\Models\Purshe;
use PDF;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Carbon\Carbon;

class FuecController extends Controller
{
    public function index () {
        $contracts = Contract::query()
            ->with('department', 'municipality', 'contractor', 'vehicle:id,car_plate', 'routes')
            ->orderBy('id', 'desc')
            ->paginate(20);
        
        return response()->json($contracts, 200);
    }

    public function myFuecs() {
        
        $vehicles = \Auth::user()->vehicles;
        
        $vehiclesArray = [];
        foreach ($vehicles as $vehicle) {
            array_push($vehiclesArray, $vehicle->id);
        }

        $contracts = Contract::query()
            ->whereIn('vehicle_id', $vehiclesArray)
            ->with('department', 'municipality', 'contractor', 'vehicle:id,car_plate', 'routes')
            ->whereIn('user_id', function ($query) {
                $query->select('user_id')
                    ->from('license_trans')
                    ->where('expiration_date', '>', Carbon::now());
            })
            ->whereIn('vehicle_id', function ($query) {
                $query->select('vehicle_id')
                    ->from('documentations')
                    ->where('expiration_date', '>', Carbon::now());
            })
            ->orderBy('id', 'desc')
            ->paginate(20);

        return $contracts;
    }
    
    public function generateFuec($id, $user = null)
    {
        $fuecs = FuecGenerated::orderBy('id', 'desc')->first();

        $user = $user != null ? $user : \Auth::user()->id;

        if ($fuecs) {
            $fuec = new FuecGenerated();
            $fuec->user_id = $user;
            $fuec->contract_id = $id;
            $fuec->consecutive = $fuecs->consecutive + 1;
            $fuec->save();

        } else {
            $fuec = new FuecGenerated();
            $fuec->user_id = $user;
            $fuec->contract_id = $id;
            $fuec->consecutive = 1;
            $fuec->save();
        }

        $data = Contract::find($id);

        $Acode = env('COMP_CODE_TERRITORIAL');
        $Bresolution = env('COMP_RESOLUTION');
        $Cabilidadempresa = env('COMP_QUALIFICATION');
        $Dyearcontrato = now()->year;
        $consecutive = str_pad($data->number, 4, '0', STR_PAD_LEFT);
        $consecutive2 = str_pad($fuec->consecutive, 4, '0', STR_PAD_LEFT);

        $codigo = "{$Acode}{$Bresolution}{$Cabilidadempresa}{$Dyearcontrato}{$consecutive}{$consecutive2}";

        $qrcode = base64_encode(QrCode::format('svg')->size(200)->errorCorrection('H')->generate(env('APP_URL') . 'pdf/' . $data->id));


        $m_path = 'images/pdf/movilidad.png';
        $m_type = pathinfo($m_path, PATHINFO_EXTENSION);
        $m_encode = file_get_contents($m_path);
        $m_logo = 'data:image/' . $m_type . ';base64,' . base64_encode($m_encode);

        $s_path = 'images/pdf/supertransport.png';
        $s_type = pathinfo($s_path, PATHINFO_EXTENSION);
        $s_encode = file_get_contents($s_path);
        $s_logo = 'data:image/' . $s_type . ';base64,' . base64_encode($s_encode);

        $l_path = env('COMP_IMAGE');
        $l_type = pathinfo($l_path, PATHINFO_EXTENSION);
        $l_encode = file_get_contents($l_path);
        $l_logo = 'data:image/' . $l_type . ';base64,' . base64_encode($l_encode);

        $f_path = env('COMP_SIGN');
        $f_type = pathinfo($f_path, PATHINFO_EXTENSION);
        $f_encode = file_get_contents($f_path);
        $f_logo = 'data:image/' . $f_type . ';base64,' . base64_encode($f_encode);

        $pdf = PDF::loadView('pdf.fuec', [
            'data' => $data,
            'qr' => $qrcode,
            'codigo' => $codigo,
            'movilidad' => $m_logo,
            'supertransport' => $s_logo,
            'logo' => $l_logo,
            'firma' => $f_logo
        ]);

        $name = $data->number . '.pdf';

        return $pdf->download($name);
    }

    public function generateFuecValidate($id)
    {

        $data = Contract::find($id);

        $fuec = FuecGenerated::where('contract_id', $data->id)->first();

        $Acode = env('COMP_CODE_TERRITORIAL');
        $Bresolution = env('COMP_RESOLUTION');
        $Cabilidadempresa = env('COMP_QUALIFICATION');
        $Dyearcontrato = now()->year;
        $consecutive = str_pad($data->number, 4, '0', STR_PAD_LEFT);
        $consecutive2 = str_pad($fuec->consecutive, 4, '0', STR_PAD_LEFT);

        $codigo = "{$Acode}{$Bresolution}{$Cabilidadempresa}{$Dyearcontrato}{$consecutive}{$consecutive2}";

        $qrcode = base64_encode(QrCode::format('svg')->size(200)->errorCorrection('H')->generate(env('APP_URL') . 'pdf/' . $data->id));


        $m_path = 'images/pdf/movilidad.png';
        $m_type = pathinfo($m_path, PATHINFO_EXTENSION);
        $m_encode = file_get_contents($m_path);
        $m_logo = 'data:image/' . $m_type . ';base64,' . base64_encode($m_encode);

        $s_path = 'images/pdf/supertransport.png';
        $s_type = pathinfo($s_path, PATHINFO_EXTENSION);
        $s_encode = file_get_contents($s_path);
        $s_logo = 'data:image/' . $s_type . ';base64,' . base64_encode($s_encode);

        $l_path = env('COMP_IMAGE');
        $l_type = pathinfo($l_path, PATHINFO_EXTENSION);
        $l_encode = file_get_contents($l_path);
        $l_logo = 'data:image/' . $l_type . ';base64,' . base64_encode($l_encode);

        $f_path = env('COMP_SIGN');
        $f_type = pathinfo($f_path, PATHINFO_EXTENSION);
        $f_encode = file_get_contents($f_path);
        $f_logo = 'data:image/' . $f_type . ';base64,' . base64_encode($f_encode);

        $pdf = PDF::loadView('pdf.fuec', [
            'data' => $data,
            'qr' => $qrcode,
            'codigo' => $codigo,
            'movilidad' => $m_logo,
            'supertransport' => $s_logo,
            'logo' => $l_logo,
            'firma' => $f_logo
        ]);

        $name = $data->number . '.pdf';

        return $pdf->download($name);
    }
}
