<?php

namespace App\Traits\Users;

use Illuminate\Database\Eloquent\Builder;

trait ManageVehicle
{
    public function scopeDoesntHaveVehicle(Builder $builder, $vehicleId)
    {
        return $builder->whereDoesntHave(
            'vehicles', function ($query) use ($vehicleId) {
            $query->where('vehicle_id', $vehicleId);
        })->get();
    }

    public function scopeHasVehicle(Builder $builder)
    {
        return $builder->whereHas('vehicles')->get();
    }

    public function scopeMyVehicles()
    {
        return $this->vehicles()->get();
    }
}
