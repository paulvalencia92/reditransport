<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractRoutesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_routes', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('contract_id');
            $table->foreign('contract_id')->references('id')->on('contracts')->onDelete('cascade');

            $table->string('from');
            $table->string('to');

            $table->string('center_from')->nullable();
            $table->string('center_to')->nullable();

            $table->string('details')->nullable();

            $table->string('files')->nullable();

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
        Schema::dropIfExists('contract_routes');
    }
}
