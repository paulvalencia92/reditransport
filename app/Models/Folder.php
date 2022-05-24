<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    protected $guarded = [];

    public function folders()
    {
        return $this->hasMany(Folder::class, 'folder_id');
    }

    public function files()
    {
        return $this->hasMany(File::class);
    }
}
