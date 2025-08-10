<x-guest-layout>
    <form method="POST" id='register_form' action="{{ route('register') }}" enctype="multipart/form-data">
        @csrf

        @if (session('error'))
            <div class="alert alert-danger">
                {{ session('error') }}
            </div>
        @endif

        <!-- Name -->
        <div>
            <x-input-label for="name" :value="__('Name')" />
            <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
            <div id="name_error" class="text-sm text-red-600 space-y-1"></div>
        </div>

        <!-- Email Address -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')"  autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
            <div id="email_error" class="text-sm text-red-600 space-y-1"></div>
        </div>
        <!-- Role select -->
        <div class="mt-4">
            <x-input-label for="role" value="Selezionare il ruolo" />
            <div id="role" name='role' class="mt-1 w-100" required></div>
            <x-input-error :messages="$errors->get('role')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
            <div id="password_error" class="text-sm text-red-600 space-y-1"></div>
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
            <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

            <x-text-input id="password_confirmation" class="block mt-1 w-full"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
            <div id="password_confirmation_error" class="text-sm text-red-600 space-y-1"></div>
        </div>

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>

            <x-primary-button class="ms-4">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
<script>
    window.reactValidation = {
        hasError: false
    };

    let form = document.querySelector('#register_form')

    form.addEventListener("focusout", function (e) {
        const target = e.target;

        if (target.name != 'role'){
            target.classList.remove("is-invalid");
            target.classList.add("is-valid");
        }
        

        const errorName = document.querySelector(`#name_error`);
        const errorEmail = document.querySelector(`#email_error`);
        const errorPassword = document.querySelector(`#password_error`);
        const error_password_confirmation = document.querySelector(`#password_confirmation_error`);

        console.log(target.name)

        switch (target.name) {
            case 'name': 
                errorName.textContent = ""
                if (!target.value) {
                    errorName.textContent =  "Inserire il nome"
                    target.classList.add("is-invalid");
                }
                break;
            case 'email':
                errorEmail.textContent = ""
                if (!target.value) {
                    errorEmail.textContent =  "Inserire l'email"
                    target.classList.add("is-invalid");
                }
                break;
            case 'password':
                errorPassword.textContent = ""
                if (!target.value) {
                    errorPassword.textContent = "Inserire la password"
                    target.classList.add("is-invalid");
                } else if (target.value.length < 8){
                    errorPassword.textContent = "La password deve contenere almeno 8 caratteri"
                    target.classList.add("is-invalid");
                }
                break;
            case "password_confirmation":
                let password = document.querySelector("#password").value

                if(target.value == password){
                    errorPassword.textContent = ""
                    error_password_confirmation.textContent = ""
                }
                break;
            
        }
    });
    
    form.addEventListener("submit", function (e) {

        let email = document.querySelector("#email")
        let password = document.querySelector("#password")
        let name = document.querySelector("#name")
        let password_confirmation = document.querySelector("#password_confirmation")

        if (!name.value) {
            document.querySelector("#name_error").textContent = "Inserire il nome"
            name.classList.add("is-invalid");
            window.reactValidation.hasError = true
        }

        if (!email.value) {
            document.querySelector("#email_error").textContent = "Inserire l'email"
            email.classList.add("is-invalid");
            window.reactValidation.hasError = true
        }

        if (!password.value) {
            document.querySelector("#password_error").textContent = "Inserire la password"
            password.classList.add("is-invalid");
            window.reactValidation.hasError = true
        }

        if (password_confirmation.value != password.value ) {
            document.querySelector("#password_confirmation_error").textContent = "La password deve coincidere"
            document.querySelector("#password_error").textContent = "La password deve coincidere"
            password_confirmation.classList.add("is-invalid");
            window.reactValidation.hasError = true
        }

        if (window.reactValidation.hasError) {
            e.preventDefault();
        }
    });




</script>
