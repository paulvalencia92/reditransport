<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicleReceiptDeliveriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_receipt_deliveries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vehicle_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->float('km');
            $table->string('extracto_contrato_conductor');
            $table->date('date');
            $table->json('items');

            $table->string('car_plate');
            $table->string('type');
            $table->string('driver');
            $table->string('license');
            $table->string('soat');
            $table->string('contractual');
            $table->string('extra_contractual');
            $table->string('permiso_acceso');
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
        Schema::dropIfExists('vehicle_receipt_deliveries');
    }
}
