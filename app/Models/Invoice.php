<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $guarded = [];

    protected $casts = [
        'customer' => 'array',
        'payment_form' => 'array',
        'legal_monetary_totals' => 'array',
        'tax_totals' => 'array',
        'invoice_lines' => 'array',
        'billing_reference' => 'array',
        'credit_note_lines' => 'array',
        'debit_note_lines' => 'array',
        'requested_monetary_totals' => 'array',
    ];

    protected $appends = ['estado'];

    const EMITIDA = 1, NO_EMITIDA = 2, ANULADA_EMITIDA = 3, AJUSTE_SIN_EMITIR = 4, AJUSTE_EMITIDO = 5, ELIMINADA = 6;

    public static function statusTypes()
    {
        return [
            self::EMITIDA,
            self::NO_EMITIDA,
            self::ANULADA_EMITIDA,
            self::AJUSTE_SIN_EMITIR,
            self::AJUSTE_EMITIDO,
            self::ELIMINADA,
        ];
    }

    public function getEstadoAttribute()
    {
        $status = "";
        if ($this->status == self::EMITIDA) {
            $status = "Emitida";
        } elseif ($this->status == self::NO_EMITIDA) {
            $status = "No emitida";
        }
        return $status;
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

}
