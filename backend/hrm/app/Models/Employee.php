<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'email', 'contact', 'profile_picture', 'department'
    ];

    /*public function equipment() {
        return $this->hasMany(Equipment::class);
    }*/
    
}
