let mix = require('laravel-mix');


mix.sass('asset/sass/common.scss', 'asset/css/common.css')
    .js('asset/js/common.js', 'asset/js/compress-common.js');


