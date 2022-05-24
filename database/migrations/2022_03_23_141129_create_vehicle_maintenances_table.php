<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicleMaintenancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_maintenances', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('vehicle_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->float('km');
            $table->string('date');
            $table->string('pase');
            $table->date('vence');
            $table->string('categoria');
            $table->json('items');
            $table->string('observaciones');
            $table->float('total_gasto');

            $table->string('driver');
            $table->string('car_plate');
            $table->string('type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicle_maintenances');
    }
}
