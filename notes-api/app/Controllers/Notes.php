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
        return $this->respond($this->model->findAll());
    }
}