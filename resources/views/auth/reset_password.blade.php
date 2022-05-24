<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Servipublico</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/custom.css"/>
    <!-- Styles -->
    <style>
        .loading_wrap {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #fff;
            display: block;
            position: absolute;
        }

        .loader_logo {
            height: 80px;
            width: 80px;
            position: absolute;
            left: calc(50% - 50px);
            top: 38%;
        }

        .loader_logo img {
            height: 100%;
            width: 100%;
        }

        .loading {
            border: 3px solid rgba(102, 51, 153, 0.45);
            position: absolute;
            left: calc(50% - 35px);
            top: 50%;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            border-top-color: #a855f7;
            animation: loader 1s ease-in-out infinite;
            -webkit-animation: loader 1s ease-in-out infinite;
        }

        @keyframes loader {
            to {
                -webkit-transform: rotate(360deg);
            }
        }

        @-webkit-keyframes loader {
            to {
                -webkit-transform: rotate(360deg);
            }
        }
    </style>
</head>
<body>

<div>
    <div
            class="auth-layout-wrap"
            :style="{ backgroundImage: 'url(' + bgImage + ')' }">
        <div class="auth-content">
            <div class="card o-hidden">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-4">
                            <div class="auth-logo text-center mb-30">
                                <img src="/images/logo-sistema.png"/>
                            </div>
                            <h1 class="mb-3 text-18">Inicia sesión</h1>
                            <form class="form-container" action="api/password/reset" method="POST">

                                <input hidden name="token" placeholder="token" value="{{request()->get('token')}}">

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input class="form-control-rounded form-control" name="email"
                                           placeholder="Enter email"
                                           value="{{request()->get('email')}}">
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Contraseña</label>
                                    <input class="form-control-rounded form-control" name="password"
                                           placeholder="Enter new password">
                                </div>


                                <div class="form-group">
                                    <label for="exampleInputEmail1">Repetir ontraseña</label>
                                    <input class="form-control-rounded form-control" name="password_confirmation"
                                           placeholder="Confirm new password">
                                </div>


                                <button class="btn btn-rounded btn-block mt-2 btn-primary mt-2" type="submit">Actualizar contraseña
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script src="{{ asset("js/app.js") }}"></script>
</html>
