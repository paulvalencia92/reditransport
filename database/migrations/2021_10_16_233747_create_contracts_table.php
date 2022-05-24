<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->id();

            $table->string('number');

            $table->foreignId('department_id')->constrained();
            $table->foreignId('municipality_id')->constrained();

            $table->date('start_date');
            $table->date('end_date');

            $table->string('contract_type');
            $table->string('convenio');

            $table->unsignedBigInteger('contractor_id')->nullable();
            $table->foreign('contractor_id')->references('id')->on('contractors')->onDelete('cascade');

            $table->string('object');

            $table->string('incomes')->nullable();

            $table->string('details')->nullable();

            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('vehicle_id')->nullable();
            $table->foreign('vehicle_id')->references('id')->on('vehicles')->onDelete('cascade');

            $table->boolean('status')->default(true);

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
        Schema::dropIfExists('contracts');
    }
}
