<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Http\Requests\ExpenseStoreRequest;
use App\Http\Resources\ExpenseCollection;
use App\Http\Resources\ExpenseResource;
use App\Models\Expense;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Request;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ExpenseCollection
     */
    public function index()
    {
        return new ExpenseCollection(
            Expense::latest()
                ->orderByName()
                ->filter(Request::only('search', ))
                ->paginate()
                ->appends(Request::all())
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function store(ExpenseStoreRequest $request)
    {
        $feedback = auth()->user()->expense()->create(
            $request->all()
        );

        return response()->json([
            "status" => 200,
            "expense" => $feedback,
            "message" => "Action completed",
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $expense = Expense::find($id);

        if (!is_null($expense)) {
            return response()->json(new ExpenseResource($expense));
        }

        return response()->json([
            "status" => false,
            "message" => "Resource not found",
        ], 404);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}