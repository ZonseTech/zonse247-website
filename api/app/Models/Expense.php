<?php

namespace App\Models;

use App\Models\Status;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "user_id",
        "title",
        "date",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the user that owns the status.
     */
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('date');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'like', '%' . $search . '%');
            });
        });
    }
}
