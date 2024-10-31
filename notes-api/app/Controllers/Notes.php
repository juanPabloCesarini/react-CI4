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

    public function update( $id = null ) {
        $form = $this->request->getJSON( true );

        if ( empty( $form ) ) {
            return $this->failValidationErrors( 'Nada que actualizar' );
        }

        if ( !$this->model->find( $id ) ) {
            return $this->failNotFound();
        }

        if ( !$this->model->update( $id, $form ) ) {
            return $this->failValidationErrors( $this->model->errors() );
        }

        return $this->respondUpdated( [
            'message' => 'Registro actualizado con éxito',
            'data' => $this->model->find( $id ),
        ] );
    }
}