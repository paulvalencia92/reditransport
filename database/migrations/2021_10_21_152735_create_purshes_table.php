<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurshesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purshes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->foreignId('vehicle_id')->nullable()->constrained();
            $table->enum('type', ['unico', 'recurrente']);
            $table->text('detail')->nullable();
            $table->date('payment_date');
            $table->enum('status_pay', ['No pago', 'Parcialmente pago', 'Pago completo'])->default('No pago');
            $table->string('file')->nullable();
            $table->decimal('cost', 16, 2)->nullable();
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
        Schema::dropIfExists('purshes');
    }
}
