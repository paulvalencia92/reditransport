<?php

namespace App\Traits\Vehicles;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Carbon\Carbon;

trait Filters
{
    public function scopeFiltered(Builder $builder, Request $request)
    {
        $builder->with('documentations', 'users');
        if ($request->from) {
            $builder->where('date_association_company', '>=', $request->from);
        }
        if ($request->to) {
            $builder->where('date_association_company', '<=', $request->to);
        }

        if ($request->car_plate) {
            $builder->where('car_plate', $request->car_plate);
        }

        if ($request->internal_number) {
            $builder->where('internal_number', $request->internal_number);
        }

        if ($request->settled_city) {
            $builder->where('car_plate', $request->settled_city);
        }
        return $builder->get();
    }


    public function scopeFilteredDocuments(Builder $builder, Request $request)
    {
        $builder->with('documentations');

        if ($request->associate == 'sin-asociar') {
            $builder->whereDoesntHave('users');
        }

        if ($request->defeated == "true") {

            $currentDate = Carbon::now()->format('Y-m-d');
            $documents = $request->documents;

            $builder->whereHas('documentations', $this->queryDocumentsExpired($currentDate, $documents))
                ->with(['documentations' => $this->queryDocumentsExpired($currentDate, $documents)])
                ->get();

        } else {

            $documents = $request->documents;

            $builder->whereHas('documentations', $this->queryDocumentsAll($documents))
                ->with(['documentations' => $this->queryDocumentsAll($documents)])
                ->get();
        }


        return $builder->get();
    }


    public function queryDocumentsExpired(string $currentDate, $documents): Closure
    {
        return function ($query) use ($currentDate, $documents) {
            $query->whereIn('type', $documents)
                ->whereDate('expiration_date', '<=', $currentDate);
        };
    }

    public function queryDocumentsAll($documents): Closure
    {
        return function ($query) use ($documents) {
            $query->whereIn('type', $documents);
        };
    }

}
