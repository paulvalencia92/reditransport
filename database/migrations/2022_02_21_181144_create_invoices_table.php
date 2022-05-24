<?php

use App\Models\Invoice;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->foreignId('vehicle_id')->nullable()->constrained();

            $table->unsignedBigInteger('invoice_id')->nullable();
            $table->foreign('invoice_id')->references('id')->on('invoices')->onDelete('cascade');

            $table->bigInteger('number')->unique();
            $table->integer('type_document_id');
            $table->bigInteger('resolution_number');
            $table->text('notes')->nullable();
            $table->json('customer');
            $table->json('payment_form')->nullable();
            $table->json('legal_monetary_totals')->nullable();
            $table->json('requested_monetary_totals')->nullable();
            $table->json('tax_totals');
            $table->json('invoice_lines')->nullable();
            $table->json('credit_note_lines')->nullable();
            $table->json('billing_reference')->nullable();
            $table->json('debit_note_lines')->nullable();
            $table->text('cufe')->nullable();
            $table->enum('status', Invoice::statusTypes())->default(Invoice::NO_EMITIDA);
            $table->string('file')->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
