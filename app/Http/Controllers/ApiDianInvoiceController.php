<?php

namespace App\Http\Controllers;

use App\Models\{User, Invoice, Company};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiDianInvoiceController extends Controller
{
    public function index()
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/custom/invoices";
        $response = Http::withToken($token)->acceptJson()->get($url);
        return $response->body();
    }


    public function getLatestInvoice(Request $request)
    {
        $data = Invoice::query()
            ->where('type_document_id', $request->type_document_id)
            ->orderByDesc('id')
            ->first();
        return response()->json($data);
    }

    public function getInvoiceByType(Request $request)
    {
        $data = Invoice::query()
            ->with('user.customer', 'vehicle:id,car_plate')
            ->whereIn('type_document_id', $request->types)
            ->get();

        return response()->json($data, 200);
    }


    public function store(Request $request)
    {

        $data = Invoice::create([
            'user_id' => $request->user_id,
            'vehicle_id' => $request->vehicle_id,
            'type_document_id' => $request->type_document_id,
            'number' => $request->number,
            'resolution_number' => $request->resolution_number,
            'notes' => $request->notes,
            'customer' => $request->customer,
            'payment_form' => $request->payment_form,
            'legal_monetary_totals' => $request->legal_monetary_totals,
            'tax_totals' => $request->tax_totals,
            'invoice_lines' => $request->invoice_lines,
            'invoice_id' => $request->invoice_id,
            'billing_reference' => $request->billing_reference,
            'debit_note_lines' => $request->debit_note_lines,
            'requested_monetary_totals' => $request->requested_monetary_totals,
        ]);

        return response()->json($data, 201);

    }


//    public function store(Request $request)
//    {
//        $user = User::first();
//        $token = $user->token_api_dian;
//        $url = config('services.dian.host') . "/ubl2.1/invoice/5c88cf06-cba9-443d-9752-976198120b18";
//        $response = Http::withToken($token)->acceptJson()->post($url, $request->all());
//        return $response->body();
//    }


    public function emitInvoice(Invoice $invoice)
    {
//        return $invoice;
        $user = User::first();
        $company = Company::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/invoice/5c88cf06-cba9-443d-9752-976198120b18";
        $response = Http::withToken($token)->acceptJson()->post($url, $invoice->toArray());

        if ($response->status() == 200) {

            $invoice->cufe = $response['cufe'];
            $invoice->status = Invoice::EMITIDA;
            $invoice->file = $company->nit . "/" . $response['urlinvoicepdf'];
            $invoice->save();
            return [
                'invoice' => $invoice->load('user:id,names', 'vehicle:id,car_plate'),
                'message' => $response['message'],

            ];
        } else {
            return $response;
        }


    }


    public function emitCreditNote(Invoice $invoice)
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $company = Company::first();

        $url = config('services.dian.host') . "/ubl2.1/credit-note/5c88cf06-cba9-443d-9752-976198120b18";
        $response = Http::withToken($token)->acceptJson()->post($url, $invoice->toArray());

        if ($response->status() == 200) {

//            $invoice->cufe = $response['cufe'];
            $invoice->status = Invoice::EMITIDA;
            $invoice->file = $company->nit . "/" . $response['urlinvoicepdf'];
            $invoice->save();
            return [
                'invoice' => $invoice->load('user:id,names', 'vehicle:id,car_plate'),
                'message' => $response['message'],
            ];
        } else {
            return $response;
        }
    }


    public function emitDebitNote(Invoice $invoice)
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $company = Company::first();

        $url = config('services.dian.host') . "/ubl2.1/debit-note/5c88cf06-cba9-443d-9752-976198120b18";
        $response = Http::withToken($token)->acceptJson()->post($url, $invoice->toArray());

        if ($response->status() == 200) {

//            $invoice->cufe = $response['cufe'];
            $invoice->status = Invoice::EMITIDA;
            $invoice->file = $company->nit . "/" . $response['urlinvoicepdf'];
            $invoice->save();
            return [
                'invoice' => $invoice->load('user:id,names', 'vehicle:id,car_plate'),
                'message' => $response['message'],
            ];
        } else {
            return $response;
        }
    }
}
