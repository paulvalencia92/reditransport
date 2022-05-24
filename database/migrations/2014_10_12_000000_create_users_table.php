<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('photo')->nullable();
            $table->string('email')->unique();
            $table->foreignId('id_type_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->foreignId('municipality_id')->constrained();
            $table->unsignedBigInteger('identification_number')->unique();
            $table->string('names');
            $table->string('surnames');
            $table->date('date_of_birth');
            $table->enum('sex', ['Masculino', 'Femenino']);
            $table->string('residence_address');
            $table->string('phone_number');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('file')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
