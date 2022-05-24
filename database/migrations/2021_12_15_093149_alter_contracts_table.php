<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //

        Schema::table('contracts', function (Blueprint $table) {

            $table->unsignedBigInteger('user_second_id')->nullable();
            $table->foreign('user_second_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('user_third_id')->nullable();
            $table->foreign('user_third_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('user_four_id')->nullable();
            $table->foreign('user_four_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
