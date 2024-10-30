<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\ResponseInterface;

class Notes extends ResourceController
 {
    protected $modelName = 'App\Models\NotesModel';
    protected $format   = 'json';

    public function index()
 {
        return $this->respond( $this->model->findAll() );
    }

    public function create() {
        $form =  $this->request->getJSON( true );
        if ( !$id = $this->model->insert( $form ) ) {
            return $this->failValidationErrors( $this->model->errors() );
        }
        $note = $this->model->find( $id );
        return $this->respondCreated( [ 'msg'=>'registro OK!', 'data'=>$note ] );
    }
}