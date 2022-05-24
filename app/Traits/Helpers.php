<?php

namespace App\Traits;

trait Helpers
{
    protected function dataForSelectComponent($array)
    {
        $data = collect([]);
        foreach ($array as $item) {
            $data->push(['value' => $item->id, 'text' => $item->name,]);
        }
        return $data;
    }

    protected function dataForSelectComponentTwo($array, $key)
    {
        $data = collect([]);
        foreach ($array as $item) {
            $data->push(['value' => $item['id'], 'text' => $item[$key]]);
        }
        return $data;
    }
}
