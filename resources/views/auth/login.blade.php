<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" id="login_form" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
            <div id="email_error" class="text-sm text-red-600 space-y-1"></div>
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
            <div id="password_error" class="text-sm text-red-600 space-y-1"></div>

        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" name="remember">
                <span class="ms-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-content-between mt-4">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('register') }}">
                {{ __("Registrati")}}
            </a>
            <div>
                @if (Route::has('password.request'))
                    <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                        {{ __('Forgot your password?') }}
                    </a>
                @endif

                <x-primary-button class="ms-3" id="login_button">
                    {{ __('Log in') }}
                </x-primary-button>
            </div>
        </div>
    </form>
</x-guest-layout>
<script>

    const form = document.querySelector("#login_form");

    form.addEventListener("focusout", function (e) {
        const target = e.target;
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");

        console.log(target.name)
        const errorElement = document.querySelector(`#${target.id}_error`);
        errorElement.textContent = ""

        if (target.name =='email'){
            if (!target.value) {
                errorElement.textContent =  "Inserire l'email"
                target.classList.add("is-invalid");
            }
        } else if (target.name =='password'){
            if (!target.value) {
                errorElement.textContent = "Inserire la password"
                target.classList.add("is-invalid");
            }
        }
    });

    form.addEventListener("submit", function (e) {

        let hasError = false

        let email = document.querySelector("#email")
        let password = document.querySelector("#password")

        if (!email.value) {
            document.querySelector("#email_error").textContent = "Inserire l'email"
            email.classList.add("is-invalid");
            hasError = true
        }

        if (!password.value) {
            document.querySelector("#password_error").textContent = "Inserire la password"
            password.classList.add("is-invalid");
            hasError = true
        }

        if (hasError) {
            e.preventDefault();
        }
    });
</script>
