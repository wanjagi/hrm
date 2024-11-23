<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index() {
        return Employee::all();
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'contact' => 'required|string',
            'department' => 'required|string',
            'profile_picture' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation
        ]);

        $data = $request->all();

        if ($request->hasFile('profile_picture')) {
            $image = $request->file('profile_picture');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/profile_pictures'), $imageName);
            $data['profile_picture'] = 'images/profile_pictures/' . $imageName;
        }

        $personnel = Employee::create($data);
        return response()->json([
            'success' => true,
            'data' => $personnel
        ], 201);
        //return response()->json($personnel, 201);
    }

    
    // public function store(Request $request) {
    //     $validated = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|email|unique:employees',
    //         'contact' => 'required|string|max:20',
    //     ]);
    
    //     return Employee::create(attributes: $validated);
    // }
    

    public function update(Request $request, Employee $employee) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:employees,email,' . $employee->id,
            'contact' => 'required|string|max:20',
        ]);
        
        $employee->update($validated);
        return response()->json($employee); // Return the updated record
    }
    
    // public function update(Request $request, Employee $employee) {
    //     $employee->update($request->all());
    //     //return $employee;
    // }
    
    public function destroy(Employee $employee) {
        $employee->delete();
        return response()->json(null, 204);
    }
    
}
