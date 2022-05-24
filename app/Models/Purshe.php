<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Purshe extends Model
{
    protected $guarded = [];
    protected $casts = ['is_pay' => 'boolean', 'months' => 'array'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function purshe_transaction()
    {
        return $this->hasMany(PursheTransaction::class);
    }
}
