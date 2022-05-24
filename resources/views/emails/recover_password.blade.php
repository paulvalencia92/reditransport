@component('mail::message')
# Hola {{ $user->name }}
<br>
Has solicitado la recuperación de la contraseñá en {{ config('app.name') }}
<br>
Esta es tu contraseña para iniciar sesion {{ $newPassword }}
Por favor a traves de este link puedes registrar tu contraseña
@component('mail::button',['url' => env('APP_URL')])
 Reestablecer contraseña
@endcomponent
Atentamente,<br>
{{ config('app.name') }}
@endcomponent

