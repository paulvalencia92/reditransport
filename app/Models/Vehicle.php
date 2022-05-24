<?php

namespace App\Models;

use App\Traits\Vehicles\Filters;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class Vehicle extends Model
{
    use Filters;

    protected $guarded = [];
    protected $casts = ['its_linked' => 'boolean'];

    public static function types(): array
    {
        return [
            'Automovil',
            'Camioneta',
            'Doble Cabina',
            'Station Wagon',
            'Bus',
            'Buseta',
            'MicroBus',
            'Campero',
            'Camion',
        ];
    }


    public static function colors(): array
    {
        return [
            'Amarillo',
            'Azul',
            'Blanco',
            'Gris',
            'Marron',
            'Naranja',
            'Negro',
            'Rojo',
            'Verde',
        ];
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('created_at');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function municipality()
    {
        return $this->belongsTo(Municipality::class);
    }


    public function documentations()
    {
        return $this->hasMany(Documentation::class);
    }

    public function purshes()
    {
        return $this->hasMany(Purshe::class);
    }


}
