<?php

namespace App\Models;

use CodeIgniter\Model;
use Faker\Generator;

class NotesModel extends Model
 {
    protected $table            = 'notes';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [ 'title', 'body' ];

    protected bool $allowEmptyInserts = false;
    protected bool $updateOnlyChanged = true;

    protected array $casts = [];
    protected array $castHandlers = [];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [
        'title'=>[
            'label' => 'title',
            'rules' => 'required'
        ],
        'body'=>[
            'label' => 'body',
            'rules' => 'required'
        ],
    ];
    protected $validationMessages   = [
        'title' => [
            'required' =>'El campo {field} es requerido',
        ],
        'body' => [
            'required' =>'El campo {field} es requerido',
        ],
    ];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    public function fake( Generator &$faker ) {
        return [
            'title' => $faker->words( 2, true ),
            'body' => $faker->sentence( 6 )
        ];
    }
}