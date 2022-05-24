<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Incidence extends Model
{
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();
        if (!app()->runningInConsole()) {
            self::saving(function ($table) {
                $table->user_id = auth()->id();
            });
        }
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }


    public static function types()
    {
        return [
            'Siniestro',
            'Accidente común',
            'Averia',
            'Pinchazo',
        ];
    }
}
