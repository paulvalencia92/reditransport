<?php

namespace App\Traits\Users;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait ManageAffiliate
{
    public function scopeFilteredAffiliates(Builder $builder, Request $request)
    {
        $builder->with('vehicles.documentations');

        if ($request->from) {
            $builder->where('created_at', '>=', $request->from);
        }
        if ($request->to) {
            $builder->where('created_at', '<=', $request->to);
        }

        if ($request->identification_number) {
            $builder->where('identification_number', $request->identification_number);
        }

        if ($request->names) {
            $builder->where(function ($q) use ($request) {
                $q->where('names', 'like', "%{$request->names}%")
                    ->orWhere('surnames', 'like', "%{$request->names}%");
            });
        }

        if ($request->documents) {

            $documents = $request->documents;
            $builder->whereHas('vehicles', function ($q) use ($documents) {
                $q->whereHas('documentations', function ($q) use ($documents) {
                    $q->whereIn('type', $documents);
                });
            });
        }


        return $builder->get();
    }
}
