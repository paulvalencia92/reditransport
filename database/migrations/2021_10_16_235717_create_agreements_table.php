<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgreementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agreements', function (Blueprint $table) {
            $table->id();

            $table->string('nit');
            $table->string('company');

            $table->foreignId('department_id')->constrained();
            $table->foreignId('municipality_id')->constrained();

            $table->string('adress');
            $table->string('phone');
            $table->string('email');
            $table->string('contact_name');
            $table->string('contact_phone');

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
        Schema::dropIfExists('agreements');
    }
}
