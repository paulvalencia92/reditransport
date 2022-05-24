<?php

namespace App\Exports\Sheets;

use App\Models\Documentation;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;


class VehiclesPerUserSheet implements FromCollection, WithHeadings, WithTitle
{

    private $affiliates;
    private $documenType = [];


    public function __construct($affiliates)
    {
        $this->affiliates = $affiliates;
        $this->documenType = collect(Documentation::types());
    }


    public function collection()
    {
        return $this->buildCollection();
    }


    public function buildCollection()
    {
        $userVehicles = collect();

        foreach ($this->affiliates as $user) {

            $vehicles = $this->getVehiclesAddingYourUser($user);

            foreach ($vehicles as $vehicle) {

                $collect = collect([
                    $vehicle->car_plate,
                    $vehicle->model,
                    $vehicle->brand,
                    $vehicle->auto_type,
                    $vehicle->internal_number,
                    $vehicle->users[0]->full_name,
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

                $userVehicles->push($this->addExpirationDateOrNotLinked($vehicle->documentations, $collect));
            }
        }

        return $userVehicles;
    }


    public function getVehiclesAddingYourUser($user)
    {
        $userId = $user->id;
        return $user->vehicles->load([
            'users' => function ($query) use ($userId) {
                $query->where('user_id', $userId);
            }
        ]);
    }


    public function addExpirationDateOrNotLinked($documentations, $collect)
    {
        $userVehicles = collect();

        if (count($documentations)) {

            $draft = $collect;

            foreach ($documentations as $doc) {
                $index = $draft->search($doc->type);
                $replace = $draft->replace([$index => $doc->expiration_date]);
                $draft = $replace;
            }

            $mapped = $this->mapData($draft);
            $userVehicles->push($mapped);

        } else {

            $mapped = $this->mapData($collect);
            $userVehicles->push($mapped);
        }

        return $userVehicles;

    }


    public function mapData($collection)
    {
        $data = $collection->map(function ($item) {
            if ($this->documenType->contains($item)) {
                return "Documento no vinculado";
            }
            return $item;
        });

        return $data;
    }


    public function headings(): array
    {
        return [
            'Placa',
            'Modelo',
            'Marca',
            'Clase de auto',
            'Numero interno',
            'Afiliado',
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


    public function title(): string
    {
        return 'Vehiculos de afiliados';
    }
}
