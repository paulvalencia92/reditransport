<?php

namespace App\Http\Controllers;


use App\Exports\DocumentExport;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\Exportable;

class ReportDocumentsController extends Controller
{
    use Exportable;

    public function getFilteredDocuments(Request $request)
    {
        $vehiclesFiltered = Vehicle::filteredDocuments($request);
        return $vehiclesFiltered;
    }

    public function documentsExcel(Request $request)
    {
        $vehiclesFiltered = Vehicle::filteredDocuments($request);
        $vehicles = $this->mapData($vehiclesFiltered);
        $documents = $request->documents;
        $nameFile = $request->defeated == "true" ? 'reporte-documentos-vencidos.xlsx' : 'reporte-documentos.xlsx';
        return (new DocumentExport($vehicles, $documents))->download($nameFile);

    }

    private function mapData($vehicles)
    {
        $mapped = $vehicles->map(function ($item, $key) {

            $vehicle = collect([
                $item->car_plate,
                $item->internal_number,
                $item->chassis_number,
                $item->engine_number,
                $item->model,
                $item->brand,
                $item->number_seats,
                $item->enrollment_date,
                $item->auto_type,
            ]);

            $item->documentations->each(function ($item, $key) use ($vehicle) {
                $vehicle->push($item->expiration_date);
            });

            return $vehicle;

        });

        return $mapped;
    }

}
