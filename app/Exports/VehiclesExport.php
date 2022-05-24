<?php

namespace App\Exports;

use App\Models\Documentation;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class VehiclesExport implements WithHeadings, FromCollection
{
    use Exportable;

    protected $vehicles;
    protected $documenType = [];

    public function __construct($vehicles)
    {
        $this->vehicles = $vehicles;
        $this->documenType = collect(Documentation::types());
    }


    public function collection()
    {
        $vehicles = $this->vehicles;
        $data = collect([]);

        foreach ($vehicles as $vehicle) {

            $collect1 = collect([
                $vehicle->car_plate,
                $vehicle->internal_number,
                $vehicle->date_association_company,
                $vehicle->chassis_number,
                $vehicle->engine_number,
                $vehicle->model,
                $vehicle->brand,
                $vehicle->number_seats,
                $vehicle->enrollment_date,
                $vehicle->auto_type,
                'PREVENTIVA',
                'SOAT',
                'CONTRACTUAL',
                'EXTRA-CONTRACTUAL',
                'TARJETA OPERACIONES',
                'TECNOMECANICA',
                'BOTIQUIN',
                'EXTINTOR',
                'PREOPERACIONAL',
            ]);


            if (count($vehicle->documentations) > 0) {

                $draft = $collect1;

                foreach ($vehicle->documentations as $doc) {
                    $index = $draft->search($doc->type);
                    $replace = $draft->replace([$index => $doc->expiration_date]);
                    $draft = $replace;
                }

                $mapped = $this->mapData($draft);
                $data->push($mapped);


            } else {

                $mapped = $this->mapData($collect1);
                $data->push($mapped);
            }
        }
        return $data;

    }


    public function headings(): array
    {
        return [
            'Placa',
            'No Interno',
            'Fecha Ing',
            'Chasis',
            'No.Motor',
            'Modelo',
            'Marca',
            'Ptos',
            'Fecha Matricula',
            'Clase Automovil',
            'PREVENTIVA',
            'SOAT',
            'CONTRACTUAL',
            'EXTRA-CONTRACTUAL',
            'TARJETA OPERACIONES',
            'TECNOMECANICA',
            'BOTIQUIN',
            'EXTINTOR',
            'PREOPERACIONAL',
        ];


    }


    public function mapData($collection)
    {
        $documents = $this->documenType;

        $data = $collection->map(function ($item) use ($documents) {
            if ($documents->contains($item)) {
                return "Documento no vinculado";
            }
            return $item;
        });

        return $data;
    }


}
