<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class DocumentExport implements FromCollection, WithHeadings, WithTitle
{
    use Exportable;

    private $vehicles;
    private $documents;

    public function __construct($vehicles, $documents)
    {
        $this->vehicles = $vehicles;
        $this->documents = $documents;
    }


    public function collection()
    {
        return $this->vehicles;
    }

    public function headings(): array
    {
        $heading = collect([
            'Placa',
            'Nro interno',
            'Chasis',
            'Nro motor',
            'Modelo',
            'Marca',
            'Numero de puestos',
            'Fecha de matricula',
            'Clase de auto',
        ]);

        $merged = $heading->merge($this->documents);

        return $merged->toArray();
    }

    public function title(): string
    {
        return 'Reporte de documentos';
    }

}
