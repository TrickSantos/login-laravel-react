<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Clientes;

class ClienteController extends Controller
{
    public function index()
    {
        return Clientes::all();
    }
    public function show($id)
    {
        return Clientes::find($id);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->json()->all(),[
            'nome'=>'required|string|max:90',
            'sobrenome'=>'required|string|max:90',
            'endereco'=>'required|string|max:90',
            'cargo'=>'required|string|max:90',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $cliente = Clientes::create([
            'nome'=> $request->json()->get('nome'),
            'sobrenome'=> $request->json()->get('sobrenome'),
            'endereco'=> $request->json()->get('endereco'),
            'cargo'=> $request->json()->get('cargo'),
        ]);
        return $cliente;
    }
    
    public function update(Request $request, $id)
    {
        $cliente = Clientes::findOrFail($id);
        $cliente->update($request->all());

        return $cliente;
    }

    public function delete($id)
    {
        $cliente = Clientes::findOrFail($id);
        $cliente->delete();

        return 204;
    }
    
}
