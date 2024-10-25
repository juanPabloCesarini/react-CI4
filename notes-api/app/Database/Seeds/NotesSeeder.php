<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use CodeIgniter\Test\Fabricator;

class NotesSeeder extends Seeder
{
    public function run()
    {
        $fabricator=new Fabricator(\App\Models\NotesModel::class);
        $fabricator->create(10);
    }
}