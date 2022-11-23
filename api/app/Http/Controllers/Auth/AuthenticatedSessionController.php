<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     */
    public function store(Request $request)
    {
        try {

            $validator = Validator::make($request->all(),
                [
                    'email' => 'required|string|email',
                    'password' => 'required|string',
                ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Credentials not match',
                    'errors' => $validator->errors(),
                ], 401);
            }

            if (!Auth::attempt($request->only(['email', 'password']))) {
                return response()->json([
                    'status' => false,
                    'message' => 'The provided credentials do not match any of our records.',
                ], 401);
            }

            return response()->json([
                'status' => true,
                'user' => auth()->user(),
                'token' => auth()->user()->createToken("API TOKEN")->plainTextToken,
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }

    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}