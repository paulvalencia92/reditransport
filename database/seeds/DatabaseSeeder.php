<?php

use App\Models\Vehicle;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Artisan::call('passport:install --force');

//        $this->idTypes();
//        $this->call([DepartmentMunicipialitySeeder::class,BouncerSeeder::class, UserSeeder::class]);
//        $this->call([BouncerSeeder::class]);
//        $this->createVehicles();
    }

    protected function idTypes()
    {
        $idTypes = [
            'Cédula de ciudadanía (CC)',
            'Cédula de extranjería (CE)',
            'Número de identificación tributaria (NIT)',
            'Pasaporte (PP)',
            'Documento de identificación extranjero (DIE)'
        ];

        $id = 1;
        foreach ($idTypes as $type) {
            DB::table('id_types')->insertOrIgnore([
                'id' => $id,
                'name' => $type
            ]);
            $id += 1;
        }
    }

    protected function createVehicles()
    {
        Vehicle::create([
            'branch_or_agreement' => 'CONVENIOS',
            'settled_city' => 'Bogota',
            'car_plate' => 'BXY87F',
            'date_association_company' => '2022-01-13',
            'department_id' => '24',
            'municipality_id' => '1025',
            'internal_number' => '32145692',
            'enrollment_date' => '2022-01-13',
            'operation_card' => '52563',
            'chassis_number' => '565SDD',
            'engine_number' => '565SDD',
            'model' => '2020',
            'brand' => 'Honda',
            'cylinder' => '1900',
            'color' => 'Negro',
            'auto_type' => 'Automovil',
            'number_seats' => '5',
            'its_linked' => '1',
        ]);


        Vehicle::create([
            'branch_or_agreement' => 'CONVENIOS',
            'settled_city' => 'Bogota',
            'car_plate' => 'CEU69A',
            'date_association_company' => '2022-01-13',
            'department_id' => '24',
            'municipality_id' => '1025',
            'internal_number' => '32112392',
            'enrollment_date' => '2022-01-13',
            'operation_card' => '52363',
            'chassis_number' => '655SDD',
            'engine_number' => '655SDD',
            'model' => '2012',
            'brand' => 'Boxer',
            'cylinder' => '1900',
            'color' => 'Blanco',
            'auto_type' => 'Automovil',
            'number_seats' => '2',
            'its_linked' => '1',
        ]);
    }
}
