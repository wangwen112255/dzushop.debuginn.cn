<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

/**
 * 后台首页控制器
 * Class IndexController
 * @package App\Http\Controllers\Admin
 */
class IndexController extends Controller
{
    /**
     * 后台首页界面
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(){
        return view("admin.index");
    }
}