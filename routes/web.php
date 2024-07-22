<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('/', function (Request $request) {
    // Xử lý webhook từ GitHub
    $payload = json_decode($request->getContent(), true);

    // Kiểm tra sự kiện push từ GitHub
    if ($request->header('X-GitHub-Event') === 'push') {
        // Lấy thông tin branch từ payload
        $branch = str_replace('refs/heads/', '', $payload['ref']);

        // Xác định repository và thực hiện pull code
        $repositoryPath = base_path(); // Đường dẫn tới thư mục gốc của Laravel
        $gitCommand = "cd {$repositoryPath} && git pull origin {$branch}";
        $payload['repositoryPath'] = $repositoryPath;
        $payload['gitCommand'] = $gitCommand;

        // Thực thi lệnh git pull để cập nhật code
        // $output = shell_exec($gitCommand);

        // Log lại kết quả của lệnh git pull (optional)
        // \Log::info("Git pull command output: {$output}");

        DB::table("blogs")->insert([
            "content" => $payload
        ]);

        // Trả về response nếu cần
        return response()->json(['message' => 'Code pulled successfully'], 200);
    }

    // Trả về response nếu không phải sự kiện push
    return response()->json(['message' => 'Unsupported event'], 400);

   
   
    // return response()->json($data);
});

Route::get('/get-webhook-github', function (Request $request) {
    $data = DB::table("blogs")->first();
    return response()->json($data);
});
