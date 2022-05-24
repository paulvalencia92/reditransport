<?php

namespace App\Exports;

use App\Exports\Sheets\VehiclesPerUserSheet;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;

class AffiliateExport implements FromCollection, WithHeadings, WithMapping, WithMultipleSheets, WithTitle
{

    use Exportable;

    protected $affiliates;


    public function __construct($affiliates)
    {
        $this->affiliates = $affiliates;
    }

    public function collection()
    {
        return $this->affiliates;
    }


    public function map($affiliates): array
    {
        return [
            $affiliates->full_name,
            $affiliates->identification_number,
            $affiliates->phone_number,
            $affiliates->email,
            $affiliates->residence_address
        ];
    }


    public function headings(): array
    {
        return [
            'Nombre afiliado',
            'Numero de identificación',
            'Telefono',
            'Correo electronico',
            'Dirección'
        ];


    }


    public function sheets(): array
    {
        $sheets = [];
        $sheets[] = $this;
        $sheets[] = new VehiclesPerUserSheet($this->affiliates);
        return $sheets;
    }

    public function title(): string
    {
        return 'Afiliados';
    }
}
