<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreRegistrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pre_registros', function (Blueprint $table) {
            $table->id();

            $table->string('names')->nullable();
            $table->string('surnames')->nullable();
            $table->string('id_type_id')->nullable();
            $table->string('department_id')->nullable();
            $table->string('identification_number')->nullable();
            $table->string('municipality_id')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->string('sex')->nullable();
            $table->string('residence_address')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('email')->nullable();
            $table->string('file_cc')->nullable();

            $table->string('car_plate')->nullable();
            $table->string('department_id_vehicle')->nullable();
            $table->string('municipality_id_vehicle')->nullable();
            $table->string('internal_number')->nullable();
            $table->string('chassis_number')->nullable();
            $table->string('engine_number')->nullable();
            $table->string('model')->nullable();
            $table->string('brand')->nullable();
            $table->string('cylinder')->nullable();
            $table->string('color')->nullable();
            $table->string('auto_type')->nullable();
            $table->string('enrollment_date')->nullable();
            $table->string('number_seats')->nullable();
            $table->string('operation_card')->nullable();

            $table->string('names_driver')->nullable();
            $table->string('surnames_driver')->nullable();
            $table->string('id_type_id_driver')->nullable();
            $table->string('department_id_driver')->nullable();
            $table->string('identification_number_driver')->nullable();
            $table->string('municipality_id_driver')->nullable();
            $table->string('date_of_birth_driver')->nullable();
            $table->string('sex_driver')->nullable();
            $table->string('residence_address_driver')->nullable();
            $table->string('phone_number_driver')->nullable();
            $table->string('email_driver')->nullable();
            $table->string('file_cc_driver')->nullable();
            $table->string('file_license')->nullable();

            $table->string('soat')->nullable();
            $table->string('contractual')->nullable();
            $table->string('extra_contractual')->nullable();
            $table->string('tarjeta_operacion')->nullable();
            $table->string('tecnomecanica')->nullable();


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
        Schema::dropIfExists('pre_registros');
    }
}
