<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Documentation extends Model
{
    protected $guarded = [];
    public $timestamps = false;

    public static function types(): array
    {
        return [
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




}
