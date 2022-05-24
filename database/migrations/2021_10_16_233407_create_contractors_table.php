<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contractors', function (Blueprint $table) {
            $table->id();
            $table->string('nit');
            $table->string('contractor');
            $table->string('adress');
            $table->string('phone');
            $table->string('email');
            $table->string('web');
            $table->string('c_name');
            $table->string('c_last_name');
            $table->string('c_cc');
            $table->string('c_adress');
            $table->string('c_phone');

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
        Schema::dropIfExists('contractors');
    }
}
