<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link href={{ mix('css/app.css') }} rel="stylesheet">
    </head>
    <body>
        <main role="main">
            <div class="intro-section">
                <section>
                    <div class="intro-section__greeting-text-wrapper">
                        <strong class="intro-section__greeting-text">
                            Hi, my name is Al Ramos 
                            <div>
                                and I am <span class="intro-section__typed-text"></span>
                            </div> 
                            based in Lima, Peru.
                        </strong>
                    </div>
                </section>
                <div class="nav__wrapper">
                    <nav class="nav" role="navigation">
                        <ul class="nav__ul">
                            <li class="nav__li">
                                <a class="nav__link" href="#" data-content="The beginning">
                                    Home
                                </a>
                            </li>
                            <li class="nav__li">
                                <a class="nav__link" href="#" data-content="Curious?">
                                    About
                                </a>
                            </li>
                            <li class="nav__li">
                                <a class="nav__link" href="#" data-content="I got game">
                                    Skills
                                </a>
                            </li>
                            <li class="nav__li">
                                <a class="nav__link" href="#" data-content="Only the finest">
                                    Works
                                </a>
                            </li>
                            <li class="nav__li">
                                <a class="nav__link" href="#" data-content="Don't hesitate">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>  
                <div class="menu-icon__wrapper">
                    <button class="menu-icon">
                        <div class="menu-icon__middle-bar">
                        </div>
                    </button>
                </div>
            </div>
        </main>
        @if(config('app.env') == 'local')
        <script src="http://localhost:35729/livereload.js"></script>
        @endif 
        <script src={{ mix('js/app.js') }}></script>
    </body>
</html>
