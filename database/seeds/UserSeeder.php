<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::firstOrCreate(
            [
                'identification_number' => 753951789123,
            ],
            [
                'id_type_id' => 1,
                'department_id' => 24,
                'municipality_id' => 1025,
                'names' => 'Rafael',
                'surnames' => 'Méndez Rengifo',
                'date_of_birth' => '1992-10-31',
                'sex' => 'Masculino',
                'residence_address' => 'Calle falsa 1234',
                'phone_number' => '321654987',
                'email' => 'admin@reditransport.com',
                'password' => bcrypt('password'),
            ]
        );

        $admin->assign('admin');

        $conductor = User::firstOrCreate(
            [
                'identification_number' => 123456789,
            ],
            [
                'id_type_id' => 1,
                'department_id' => 24,
                'municipality_id' => 1025,
                'names' => 'Jorge',
                'surnames' => 'Maldonado',
                'date_of_birth' => '1992-03-30',
                'sex' => 'Masculino',
                'residence_address' => 'Calle falsa 1234',
                'phone_number' => '321654987',
                'email' => 'jorgemaldonado@reditransport.com',
                'password' => bcrypt('password'),
            ]
        );

        $conductor->assign('conductor');


        $owner = User::firstOrCreate(
            [
                'identification_number' => 1645563258,
            ],
            [
                'id_type_id' => 1,
                'department_id' => 24,
                'municipality_id' => 1025,
                'names' => 'Maria',
                'surnames' => 'Victoria Parra',
                'date_of_birth' => '1992-03-30',
                'sex' => 'Masculino',
                'residence_address' => 'Calle falsa 1234',
                'phone_number' => '321654987',
                'email' => 'mariavictoria@reditransport.com',
                'password' => bcrypt('password'),
            ]
        );

        $owner->assign('owner');
    }
}
