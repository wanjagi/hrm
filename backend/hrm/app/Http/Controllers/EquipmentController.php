<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Equipment;
use Illuminate\Http\Request;

class EquipmentController extends Controller
{
    public function index()
    {
        $equipment = Equipment::with('employee')->get();
        return response()->json(['data' => $equipment]);
    }
    
    public function store(Request $request)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'employee_name' => 'required|string',
            'equipment_name' => 'required|string',
        ]);

        // Find the employee by name (or ID, if preferred)
        $employee = Employee::where('name', $validatedData['employee_name'])->first();

        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        //find if product already exixsts
        $IsEquip = Equipment::where('equipment_name', $validatedData['equipment_name'])->first();
        if ($IsEquip){
            return response()->json(['message'=>'equipment already issued'], status:404);
        }

        // Create the equipment record
        $equipment = Equipment::create([
            'employee_id' => $employee->id,
            'equipment_name' => $validatedData['equipment_name']
        ]);

        // Return a success response
        return response()->json(['data' => $equipment, 'message' => 'Equipment issued successfully'], 201);
    }
    
    
    public function update(Request $request, Equipment $equipment) {
        $equipment->update($request->all());
        return $equipment;
    }
    
    public function destroy(Equipment $equipment) {
        $equipment->delete();
        return response()->json(null, 204);
    }


    public function returnEquipment(Request $request, $id)
    {
    // Find the equipment by its ID
    $equipment = Equipment::find($id);

    // Check if equipment exists
    if (!$equipment) {
        return response()->json(['success' => false, 'message' => 'Equipment not found'], 404);
    }
    
    if ($equipment->return_date){
        return response()->json(['success' => false, 'message' => 'Equipment already returned'], 404);
    } else {
            // Validate that the return_date is provided and is a valid date
        $request->validate([
            'return_date' => 'required|date',
        ]);

        // Update the return date
        $equipment->return_date = $request->input('return_date');
        
        // Save the update
        $equipment->save();

        // Return success message with 'success' key
        return response()->json([
            'success' => true,
            'message' => 'Return date updated successfully',
            'data' => $equipment,
        ], 200);
    }

    
}



    
}
