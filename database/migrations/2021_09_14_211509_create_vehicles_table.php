<?php

use App\Models\Vehicle;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->enum('branch_or_agreement', ['READY TRANSPORT', 'CONVENIOS'])->comment('SUCURSAL/CONVENIO');
            $table->string('settled_city')->comment('CIUDAD RADICADO');
            $table->string('car_plate')->unique();
            $table->date('date_association_company');
            $table->foreignId('department_id')->constrained();
            $table->foreignId('municipality_id')->constrained();
            $table->string('internal_number');
            $table->date('enrollment_date')->comment('FECHA MATRICULA');
            $table->string('operation_card');
            $table->string('chassis_number')->unique();
            $table->string('engine_number');
            $table->string('model');
            $table->string('brand');
            $table->string('cylinder');
            $table->enum('color', Vehicle::colors());
            $table->enum('auto_type', Vehicle::types());
            $table->string('number_seats');
            $table->boolean('its_linked')->default(true);
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
        Schema::dropIfExists('vehicles');
    }
}
