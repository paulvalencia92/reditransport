<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('type_document_identification_id')->nullable();
            $table->string('type_organization_id')->nullable();
            $table->string('type_regime_id')->nullable();
            $table->string('type_liability_id')->nullable();
            $table->string('nit')->nullable();
            $table->string('dv')->nullable();
            $table->string('business_name')->nullable();
            $table->string('merchant_registration')->nullable();
            $table->string('department_id')->nullable();
            $table->string('municipality_id')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('mail_host')->nullable();
            $table->string('mail_port')->nullable();
            $table->string('mail_username')->nullable();
            $table->string('mail_password')->nullable();
            $table->string('mail_encryption')->nullable();
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
        Schema::dropIfExists('companies');
    }
}
