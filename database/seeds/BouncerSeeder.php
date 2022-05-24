<?php

use Illuminate\Database\Seeder;

class BouncerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createAbilities();
        $this->createRoles();
    }


    protected function createAbilities()
    {


        Bouncer::ability()->create([
            'name' => '*',
            'title' => 'Todas las habilidades',
            'entity_type' => "*"
        ]);

        /**=================================
         *    MODULO AFILIADOS
         *================================**/

        Bouncer::ability()->create([
            'name' => 'afiliados-listar',
            'title' => 'Afiliados listar'
        ]);

        Bouncer::ability()->create([
            'name' => 'afiliados-administracion',
            'title' => 'Afiliados administración'
        ]);


        /**=================================
         *    MODULO VEHICULOS
         *================================**/

        Bouncer::ability()->create([
            'name' => 'vehiculos-listar',
            'title' => 'Vehiculos listar'
        ]);

        Bouncer::ability()->create([
            'name' => 'vehiculos-administracion',
            'title' => 'Vehiculos administración'
        ]);

        Bouncer::ability()->create([
            'name' => 'vehiculos-vinculacion',
            'title' => 'Vehiculos vinculacion'
        ]);

        Bouncer::ability()->create([
            'name' => 'vehiculos-documentacion',
            'title' => 'Vehiculos Documentación'
        ]);

        /**=================================
         *    CONFIGURACION
         *================================**/
        Bouncer::ability()->create([
            'name' => 'configuracion',
            'title' => 'Configuración'
        ]);


        Bouncer::ability()->create([
            'name' => 'configuracion-empresa',
            'title' => 'Configuración empresa'
        ]);

        Bouncer::ability()->create([
            'name' => 'configuracion-roles-habilidades',
            'title' => 'Configuración roles y habilidades'
        ]);

        /**=================================
         *    CONTRATANTES
         *================================**/


        Bouncer::ability()->create([
            'name' => 'externos',
            'title' => 'Externos'
        ]);


        Bouncer::ability()->create([
            'name' => 'contratantes-listar',
            'title' => 'Contratantes listar'
        ]);

        Bouncer::ability()->create([
            'name' => 'contratantes-administracion',
            'title' => 'Contratantes administración'
        ]);


        /**=================================
         *    CONTRATOS
         *================================**/


        Bouncer::ability()->create([
            'name' => 'contratos-listar',
            'title' => 'Contratos listar'
        ]);

        Bouncer::ability()->create([
            'name' => 'contratos-administracion',
            'title' => 'Contratos administración'
        ]);


        /**=================================
         *    CONTRATO PARTICULAR
         *================================**/


        Bouncer::ability()->create([
            'name' => 'contrato-particular-listar',
            'title' => 'Contrato particular'
        ]);

        Bouncer::ability()->create([
            'name' => 'contrato-particular-administracion',
            'title' => 'Contrato particular administración'
        ]);

        /**=================================
         *    FUE
         *================================**/
        Bouncer::ability()->create([
            'name' => 'fuec',
            'title' => 'Fuec'
        ]);

        /**=================================
         *    Incidencias
         *================================**/
        Bouncer::ability()->create([
            'name' => 'incidencias',
            'title' => 'Incidencias'
        ]);

    }

    protected function createRoles()
    {
        $admin = Bouncer::role()->create([
            'name' => 'admin',
            'title' => 'Admin',
        ]);

        $admin->allow()->everything();


        $conductor = Bouncer::role()->create([
            'name' => 'conductor',
            'title' => 'Conductor',
        ]);

//        $conductor->allow([
//
//        ]);


        $owner = Bouncer::role()->create([
            'name' => 'owner',
            'title' => 'Dueño',
        ]);

//        $owner->allow([
//
//        ]);


    }


}
