<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicleCheckOpersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_check_opers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('vehicle_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('place');
            $table->string('observaciones');
            $table->string('modalidad');
            $table->json('items');
            $table->string('driver');
            $table->string('car_plate');
            $table->string('internal_number');
            $table->date('date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicle_check_opers');
    }
}
