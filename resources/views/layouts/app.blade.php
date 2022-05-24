<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Servipublico</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css' rel='stylesheet' />
    
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

<div id="app">
    <app-component></app-component>
</div>
</body>
<script src="{{ asset("js/app.js") }}"></script>
</html>
