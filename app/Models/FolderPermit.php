<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FolderPermit extends Model
{
    protected $guarded = [];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function folders()
    {
        return $this->belongsTo(Folder::class);
    }
}
