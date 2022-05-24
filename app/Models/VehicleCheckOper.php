<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VehicleCheckOper extends Model
{
    protected $guarded = [];

    protected $casts = [
        'items' => 'array',
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
