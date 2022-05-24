<?php

use App\Http\Controllers\{ApiDianController,
    ApiDianInvoiceController,
    AuthController,
    ContratContractorController,
    CustomerController,
    FileController,
    FolderController,
    FolderPermitController,
    IdTypeController,
    DepartmentMunicipalitieController,
    IncidenceController,
    LicenseTranController,
    PreRegisterController,
    PursheController,
    ReportAffiliateController,
    ReportDocumentsController,
    ReportVehicleController,
    UserController,
    VehicleCheckOperController,
    VehicleController,
    ContractorController,
    ContractController,
    ContractRoutesController,
    VehicleDocumentationController,
    VehicleMaintenanceController,
    FuecController,
    VehicleReceiptDeliveryController};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/login', [AuthController::class, 'login']);
//Route::post('/recover-password', [AuthController::class, 'recoverPassword']);

Route::get('/idtypes-public', [IdTypeController::class, 'index']);
Route::get('/departments-public', [DepartmentMunicipalitieController::class, 'indexDepartment']);
Route::get('/municipalities-public', [DepartmentMunicipalitieController::class, 'getMunicipalitiesForDepartment']);
Route::post('/preregister', [PreRegisterController::class, 'store']);

Route::post('recover-password', [AuthController::class, 'forgot']);
Route::post('password/reset', [AuthController::class, 'reset']);

Route::group(['middleware' => 'auth:api'], function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/idtypes', [IdTypeController::class, 'index']);
    Route::get('/departments', [DepartmentMunicipalitieController::class, 'indexDepartment']);
    Route::get('/municipalities', [DepartmentMunicipalitieController::class, 'getMunicipalitiesForDepartment']);

    /**=================================
     *    USUARIOS
     *================================**/
    Route::apiResource('/users', 'UserController')->except('show');
    Route::get('/users/doesnthave-vehicles', [UserController::class, 'getUsersDoesntHaveVehicle']);
    Route::post('/users/doesnthave-vehicles', [UserController::class, 'storeUserToVehicle']);

    Route::post('/users/update-photo', [UserController::class, 'updateProfilePhoto']);


    Route::post('/users-change-password', [UserController::class, 'changeMyPassword']);

    Route::get('/users/has-vehicles', [UserController::class, 'getHasVehicles']);
    Route::get('/users/byVehicle/{id}', [UserController::class, 'getUserByVehicle']);
    Route::patch('/users/{user}/change-password', [UserController::class, 'changePassword']);


    /**=================================
     *    VEHICLES
     *================================**/
    Route::apiResource('/vehicles', 'VehicleController');
    Route::get('/my-vehicles', [VehicleController::class, 'getMyVehicles']);
    Route::get('/vehicles-by-customer/{user}', [VehicleController::class, 'getVehiclesByCustomers']);
    Route::get('/vehicles/byPlate/{plate}', [VehicleController::class, 'getByPLate']);
    Route::patch('/vehicles/{vehicle}/unlink', [VehicleController::class, 'unlink']);
    Route::delete('/vehicles/{vehicle}/unlink-user', [VehicleController::class, 'unlinkUser']);


    /**=================================
     *    DOCUMENTS
     *================================**/
    Route::apiResource('/vehicle-document', 'VehicleDocumentationController')
        ->parameter('vehicle-document', 'document');

    Route::get('/vehicle-document/byPlate/{plate}', [VehicleDocumentationController::class, 'getByPLate']);

    /**=================================
     *   LICENCIAS
     *================================**/

    Route::get('/license-trans', [LicenseTranController::class, 'index']);
    Route::post('/license-trans', [LicenseTranController::class, 'store']);
    Route::post('/license-trans-admin', [LicenseTranController::class, 'storeAdmin']);
    Route::post('/license-trans-admin/update', [LicenseTranController::class, 'updateAdmin']);
    Route::get('/my-license', [LicenseTranController::class, 'show']);

    Route::delete('/license-trans/delete/{id}', [LicenseTranController::class, 'destroy']);

    Route::get('/users-license', [LicenseTranController::class, 'getUserWithOutLicense']);


    /**=================================
     *    REPORTS
     *================================**/

    //VEHICULOS
    Route::get('/reports-vehicles', [ReportVehicleController::class, 'getFilteredVehicles']);
    Route::post('/reports-vehicles-excel', [ReportVehicleController::class, 'vehiclesExcel']);

    //AFILIADOS
    Route::get('/reports-affiliates', [ReportAffiliateController::class, 'getFilteredAffiliates']);
    Route::post('/reports-affiliates-excel', [ReportAffiliateController::class, 'affiliatesExcel']);

    //Documentos
    Route::get('/reports-documents', [ReportDocumentsController::class, 'getFilteredDocuments']);
    Route::post('/reports-documents-excel', [ReportDocumentsController::class, 'documentsExcel']);


    /**=================================
     *    CARTERAS
     *================================**/

    Route::get('/purshes', [PursheController::class, 'index']);
    Route::get('/purshes-search', [PursheController::class, 'search']);
    Route::post('/purshes', [PursheController::class, 'store']);
    Route::get('/my-purshes', [PursheController::class, 'myPurshes']);
    Route::patch('/my-purshes-file/{purshe}', [PursheController::class, 'saveFilePurshe']);
    Route::patch('/purshes/{purshe}/toggleStatus', [PursheController::class, 'toggleStatus']);

    Route::delete('/purshes/{id}/delete', [PursheController::class, 'destroy']);

    Route::get('/purshes-status', [PursheController::class, 'checkPayments']);


    /**=================================
     *    INCIDENCIAS
     *================================**/

    Route::apiResource('/incidences', 'IncidenceController');


    Route::get('/getDashboard', [UserController::class, 'getDashboard']);

    Route::get('/contractors', [ContractorController::class, 'index']);
    Route::post('/contractors', [ContractorController::class, 'store']);
    Route::put('/contractors/{id}/update', [ContractorController::class, 'update']);
    Route::delete('/contractors/{id}/delete', [ContractorController::class, 'destroy']);

    Route::get('/contracts', [ContractController::class, 'index']);
    Route::get('/my-contracts', [ContractController::class, 'myContracts']);
    Route::get('/contracts/user/{id}', [ContractController::class, 'getByUser']);
    Route::get('/contracts/check-document/{id}', [ContractController::class, 'checkDocument']);
    Route::get('/contract/{id}/show', [ContractController::class, 'show']);
    Route::post('/contracts', [ContractController::class, 'store']);
    Route::put('/contracts/{id}/update', [ContractController::class, 'update']);
    Route::delete('/contracts/{id}/delete', [ContractController::class, 'destroy']);

    Route::get('/generate/document/fuec/{id}', [FuecController::class, 'generateFuec']);

    Route::get('/fuecs', [FuecController::class, 'index']);
    Route::get('/my-fuecs', [FuecController::class, 'myFuecs']);


    Route::get('/contract-routes/{id}', [ContractRoutesController::class, 'index']);
    Route::post('/contract-routes', [ContractRoutesController::class, 'store']);
    Route::put('/contract-routes/{id}/update', [ContractRoutesController::class, 'update']);
    Route::delete('/contract-routes/{id}/delete', [ContractRoutesController::class, 'destroy']);


    Route::post('/contracts-contractors', [ContratContractorController::class, 'create']);


    Route::get('/folders', [FolderController::class, 'index']);
    Route::post('/folders', [FolderController::class, 'store']);
    Route::put('/folders/{folder}', [FolderController::class, 'update']);
    Route::post('/folders/{folder}', [FolderController::class, 'show']);
    Route::delete('/folders/{folder}', [FolderController::class, 'destroy']);

    Route::post('/files', [FileController::class, 'store']);
    Route::get('/permits/{id}/users-without', [FolderPermitController::class, 'usersWithoutPermits']);
    Route::get('/permits/{id}/users-with', [FolderPermitController::class, 'usersWithPermits']);
    Route::post('/permits', [FolderPermitController::class, 'store']);
    Route::post('/permits-delete', [FolderPermitController::class, 'destroy']);
    Route::get('/my-folders', [FolderPermitController::class, 'myFolders']);
    Route::get('/my-folders', [FolderPermitController::class, 'myFolders']);

    Route::get('/requests', [PreRegisterController::class, 'getRequests']);
    Route::post('/approve-request', [PreRegisterController::class, 'approveRequest']);
    Route::get('/delete-request/delete/{id}', [PreRegisterController::class, 'destroy']);


    /**=================================
     *    API DIAN
     *================================**/

    Route::get('/dian/config', [ApiDianController::class, 'getCompany']);
    Route::post('/dian/config', [ApiDianController::class, 'registerAsACompany']);
    Route::post('/dian/config-software', [ApiDianController::class, 'registerSoftware']);
    Route::post('/dian/config-certificate', [ApiDianController::class, 'registerCertificate']);
    Route::post('/dian/config-resolution', [ApiDianController::class, 'registerResolution']);
    Route::get('/dian/payment-methods', [ApiDianController::class, 'getPaymentMethods']);


    /**=================================
     *    Roles
     *================================**/
    Route::apiResource('/roles', 'RoleController');
    Route::get('/abilities', 'AbilitieController@index')->name('abilities.index');
    Route::get('/my-abilities', 'AbilitieController@myAbilities');

    /**=================================
     *    FACTURAS
     *================================**/
    Route::get('/dian/invoices', [ApiDianInvoiceController::class, 'index']);


    Route::post('/invoices', [ApiDianInvoiceController::class, 'store']);
    Route::put('/dian/emit-invoice/{invoice}', [ApiDianInvoiceController::class, 'emitInvoice']);
    Route::get('/lates-invoice', [ApiDianInvoiceController::class, 'getLatestInvoice']);
    Route::post('/invoices-by-type', [ApiDianInvoiceController::class, 'getInvoiceByType']);


    Route::put('/dian/credit-notes/{invoice}', [ApiDianInvoiceController::class, 'emitCreditNote']);
    Route::put('/dian/debit-notes/{invoice}', [ApiDianInvoiceController::class, 'emitDebitNote']);


    Route::get('/dian/resolution', [ApiDianController::class, 'getResolution']);
    Route::post('/dian/delete-resolution', [ApiDianController::class, 'destroyResolution']);

    Route::put('/user-update-nit/{user}', [UserController::class, 'updateDataDian']);
    Route::get('/customers', [CustomerController::class, 'index']);
    Route::post('/customers', [CustomerController::class, 'store']);
    Route::get('/customers-show', [CustomerController::class, 'show']);


    Route::get('/dian/resolutions', [ApiDianController::class, 'getResolutions']);


    Route::get('/vehicle-receipt-deliveries',[VehicleReceiptDeliveryController::class,'index']);
    Route::post('/vehicle-receipt-deliveries',[VehicleReceiptDeliveryController::class,'store']);
    Route::get('/vehicle-receipt-deliveries/generate-pdf/{id}', [VehicleReceiptDeliveryController::class, 'generatePDF']);


    Route::get('/vehicle-maintenances',[VehicleMaintenanceController::class,'index']);
    Route::post('/vehicle-maintenances',[VehicleMaintenanceController::class,'store']);
    Route::get('/vehicle-maintenances/generate-pdf/{id}', [VehicleMaintenanceController::class, 'generatePDF']);

    Route::get('/vehicle-check-operational',[VehicleCheckOperController::class,'index']);
    Route::post('/vehicle-check-operational',[VehicleCheckOperController::class,'store']);
    Route::put('/vehicle-check-operational-update/{vehicleCheckOper}',[VehicleCheckOperController::class,'update']);
    Route::post('/vehicle-check-operational-detail/{vehicleCheckOper}',[VehicleCheckOperController::class,'show']);
    Route::get('/vehicle-check-operational/generate-pdf/{id}', [VehicleCheckOperController::class, 'generatePDF']);


});


