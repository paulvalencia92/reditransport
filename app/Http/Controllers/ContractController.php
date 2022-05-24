<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Documentation;
use App\Models\FuecGenerated;
use Illuminate\Http\Request;
use App\Http\Requests\ContractRequest;
use PDF;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Carbon\Carbon;

class ContractController extends Controller
{
    public function index()
    {
        $contracts = Contract::query()
            ->with('department', 'municipality', 'contractor', 'vehicle', 'routes')
            ->orderBy('id', 'desc')
            ->paginate(20);
        

        return response()->json($contracts, 200);
    }


    public function myContracts()
    {
        $vehicles = \Auth::user()->vehicles;
        $vehiclesArray = [];
        foreach ($vehicles as $vehicle) {
            array_push($vehiclesArray, $vehicle->id);
        }

        $contracts = Contract::whereIn('vehicle_id', $vehiclesArray)->with('department', 'municipality', 'contractor',
            'vehicle', 'routes')->get();

        $arrayContract = [];
        foreach ($contracts as $contract) {
            $contract->vehicle;
            $status = false;
            foreach ($contract->vehicle->documentations as $document) {
                if ($document->expiration_date < Carbon::now()) {
                    $contract->blocked_documents = true;
                } else {
                    $contract->blocked_documents = false;
                }
            }
            if ($this->checkIfExistDocuments($contract->vehicle) == false) {
                $contract->blocked_documents = true;
            }
            if ($contract->user) {

                if ($contract->user->license_tran) {

                    if ($contract->user->license_tran < Carbon::now()) {
                        $contract->blocked_license = true;
                    } else {
                        $contract->blocked_license = false;
                    }

                } else {
                    $contract->blocked_license = true;
                }
            }
            $contract->blocked_payment = false;
            if (isset($contract->user->purshes)) {
                if ($contract->user->purshes) {
                    foreach ($contract->user->purshes as $purshe) {
                        if (($purshe->status_pay == 'No pago' || $purshe->status_pay == 'Parcialmente pago') && $purshe->payment_date < Carbon::now()) {
                            $contract->blocked_payment = true;
                        } else {
                            $contract->blocked_payment = false;
                        }
                    }
                }
            }
            if (isset($contract->user->vehicles)) {
                if ($contract->user->vehicles) {
                    foreach ($contract->user->vehicles as $vehicles) {
                        foreach ($vehicles->purshes as $purshe) {
                            if (($purshe->status_pay == 'No pago' || $purshe->status_pay == 'Parcialmente pago') && $purshe->payment_date < Carbon::now()) {
                                $contract->blocked_payment = true;
                            } else {
                                $contract->blocked_payment = false;
                            }
                        }
                    }
                }
            }
            array_push($arrayContract, $contract);
        }

        return response()->json($arrayContract, 200);
    }

    public function getByUser($id)
    {
        $contracts = Contract::where('status', '1')->where('user_id', $id)->with('department', 'municipality',
            'contractor', 'vehicle', 'routes')->get();

        $arrayContract = [];
        foreach ($contracts as $contract) {
            $contract->vehicle;
            $status = false;
            foreach ($contract->vehicle->documentations as $document) {
                if ($document->expiration_date < Carbon::now()) {
                    $contract->blocked_documents = true;
                } else {
                    $contract->blocked_documents = false;
                }
            }
            if ($this->checkIfExistDocuments($contract->vehicle) == false) {
                $contract->blocked_documents = true;
            }

            if ($contract->user) {

                if ($contract->user->license_tran) {

                    if ($contract->user->license_tran < Carbon::now()) {
                        $contract->blocked_license = true;
                    } else {
                        $contract->blocked_license = false;
                    }

                } else {
                    $contract->blocked_license = true;
                }
            }
            $contract->blocked_payment = false;
            if (isset($contract->user->purshes)) {
                if ($contract->user->purshes) {
                    foreach ($contract->user->purshes as $purshe) {
                        if (($purshe->status_pay == 'No pago' || $purshe->status_pay == 'Parcialmente pago') && $purshe->payment_date < Carbon::now()) {
                            $contract->blocked_payment = true;
                        } else {
                            $contract->blocked_payment = false;
                        }
                    }
                }
            }
            if (isset($contract->user->vehicles)) {
                if ($contract->user->vehicles) {
                    foreach ($contract->user->vehicles as $vehicles) {
                        foreach ($vehicles->purshes as $purshe) {
                            if (($purshe->status_pay == 'No pago' || $purshe->status_pay == 'Parcialmente pago') && $purshe->payment_date < Carbon::now()) {
                                $contract->blocked_payment = true;
                            } else {
                                $contract->blocked_payment = false;
                            }
                        }
                    }
                }
            }
            array_push($arrayContract, $contract);
        }

        return response()->json($arrayContract, 200);
    }

    public function checkIfExistDocuments($vehicle)
    {
        $qantity = $vehicle->documentations->count();

        if ($qantity < 5) {
            return false;
        } else {
            return true;
        }

    }

    public function checkDocument($id)
    {
        $documents = Documentation::where('expiration_date', '<', Carbon::now())->where('vehicle_id', $id)->count();

        return response()->json($documents);
    }

    public function store(ContractRequest $request)
    {
        $user = Contract::create($this->userInput($request));
        return response()->json($user, 201);
    }

    public function update(ContractRequest $request, $id)
    {
        $contract = Contract::find($id);

        $contract->fill($this->userInput($request))->save();
        return response()->json($contract, 201);
    }

    public function destroy($id)
    {
        $contract = Contract::find($id);

        $contract->delete();
        return response()->json("user successfully removed", 200);
    }

    public function show($id)
    {
        $contract = Contract::find($id)->load('department', 'municipality', 'contractor', 'vehicle', 'user',
            'user_second', 'user_third', 'user_four');
        return response()->json($contract, 200);
    }

    protected function userInput(Request $request): array
    {
        return [
            'number' => $request->number,
            'department_id' => $request->department_id,
            'contract_type' => $request->contract_type,
            'convenio' => $request->convenio,
            'municipality_id' => $request->municipality_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'contractor_id' => $request->contractor_id,
            'object' => $request->object,
            'incomes' => $request->incomes,
            'details' => $request->details,
            'user_id' => $request->user_id,
            'user_second_id' => $request->user_second_id,
            'user_third_id' => $request->user_third_id,
            'user_four_id' => $request->user_four_id,
            'vehicle_id' => $request->vehicle_id,
        ];
    }

}
