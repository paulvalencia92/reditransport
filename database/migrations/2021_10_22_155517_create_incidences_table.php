<?php

use App\Models\Incidence;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncidencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incidences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('vehicle_id')->constrained();
            $table->enum('type', Incidence::types());
            $table->enum('incidence_level', ['Leve', 'Normal', 'Grave', 'Perdida total']);
            $table->text('description')->nullable();
            $table->date('date');
            $table->decimal('estimated_cost', 16, 2)->nullable();
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
        Schema::dropIfExists('incidences');
    }
}
