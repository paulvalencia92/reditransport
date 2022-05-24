<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('identification_number')->unique();
            $table->integer('dv');
            $table->string('name');
            $table->string('phone');
            $table->string('address');
            $table->string('email')->unique();
            $table->string('merchant_registration');
            $table->unsignedInteger('type_document_identification_id');
            $table->unsignedInteger('type_organization_id');
            $table->unsignedInteger('type_liability_id');
            $table->unsignedInteger('municipality_id');
            $table->unsignedInteger('type_regime_id');
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
        Schema::dropIfExists('customers');
    }
}
