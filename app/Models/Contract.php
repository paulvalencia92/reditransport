<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function user_second()
    {
        return $this->belongsTo(User::class, 'user_second_id');
    }

    public function user_third()
    {
        return $this->belongsTo(User::class, 'user_third_id');
    }

    public function user_four()
    {
        return $this->belongsTo(User::class, 'user_four_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function municipality()
    {
        return $this->belongsTo(Municipality::class);
    }

    public function contractor()
    {
        return $this->belongsTo(Contractor::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function routes()
    {
        return $this->hasMany(ContractRoutes::class);
    }
}
