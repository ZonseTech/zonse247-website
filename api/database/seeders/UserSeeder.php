<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'id' => 1,
                'name' => 'Zonse Admin',
                'email' => 'admin@zonse.com',
                'password' => Hash::make('1234'),
                'status_id' => 1,
            ],
        ];

        User::insert($users);

    }
}