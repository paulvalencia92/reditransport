<?php

namespace App\Models;

use App\Traits\Users\ManageAffiliate;
use App\Traits\Users\ManageVehicle;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Builder;
use Silber\Bouncer\Database\HasRolesAndAbilities;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, ManageAffiliate, ManageVehicle, HasRolesAndAbilities;

//    const ADMIN = 'ADMIN';
//    const DRIVER = 'CONDUCTOR';
//    const OWNER = 'DUEÑO';

    protected $guarded = [];


    protected $hidden = [
        'password',
        'remember_token',
        'roles'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_created_dian' => 'boolean',
    ];

    protected $appends = ['full_name', 'role'];

//    protected $appends = ['full_name'];


    public function isAdmin()
    {
        return $this->roles->first()->name == 'admin';
    }


    public function vehicles()
    {
        return $this->belongsToMany(Vehicle::class);
    }

    public function id_type()
    {
        return $this->belongsTo(IdType::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function municipality()
    {
        return $this->belongsTo(Municipality::class);
    }


    public function getFullNameAttribute()
    {
        return sprintf("%s %s", $this->names, $this->surnames);
    }

    public function getRoleAttribute()
    {
        return $this->roles->first()->title;
    }

    public function license_tran()
    {
        return $this->hasOne(LicenseTran::class);
    }

    public function folder_permits()
    {
        return $this->hasMany(FolderPermit::class);
    }

    public function purshes()
    {
        return $this->hasMany(Purshe::class);
    }

    public function customer()
    {
        return $this->hasOne(Customer::class);
    }


}
