<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contractor extends Model
{
    protected $guarded = [];

    public function contracts()
    {
        return $this->hasMany(Contract::class);
    }
}
