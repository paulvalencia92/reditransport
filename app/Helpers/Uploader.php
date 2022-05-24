<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class Uploader
{
    public static function uploadFile(string $key, string $path): string
    {
        $fileName = self::generateFileName($key);
        request()->file($key)->storeAs("public/{$path}", $fileName);
        return $fileName;
    }

    public static function uploadFileTwo(string $key, string $path, string $name): string
    {
        $extension = request()->file($key)->getClientOriginalExtension();
        $fileName = sprintf('%s-%s.%s', $name, now()->timestamp, $extension);
        request()->file($key)->storeAs("public/{$path}", $fileName);
        return $fileName;
    }


    protected static function generateFileName(string $key): string
    {
        $extension = request()->file($key)->getClientOriginalExtension();
        return sprintf('%s-%s.%s', auth()->id(), now()->timestamp, $extension);
    }

    public static function removeFile(string $path, string $fileName)
    {
        Storage::delete(sprintf('public/%s/%s', $path, $fileName));
    }

    public static function removeFolder(string $path)
    {
        Storage::deleteDirectory(sprintf('public/%s', $path));
    }
}
