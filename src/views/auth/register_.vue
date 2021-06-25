<template>
  <div class="flex md:min-h-screen items-center justify-center bg-gray-100">
    <!-- maximo ancho 768 y ancho total con flex-grow -->
    <div
        class="
        flex flex-col md:flex-row flex-grow
        md:m-3
        lg:max-w-screen-md
        bg-gray-300
        rounded-md
        overflow-hidden
        shadow-lg
        ">

      <!-- Lado Izquierdo -->
      <div class="bg-blue-500 flex md:justify-between flex-col md:w-64 py-6 px-4 text-white md:flex-shrink-0">
        <div class="my-3 text-4xl font-bold tracking-wider text-center">
          <a href="#">LINEYSOFT</a>
        </div>
        <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
          Somos una empresa especializada en facturacion electronica y dar
          soluciones de software para tu negocio o pequenia empresa.
        </p>
        <p class="flex flex-col items-center justify-center mt-10 text-center">
          <span>Ya tienes una cuenta?</span>
          <a href="/login" class="underline">Entrar ..!</a>
        </p>
        <p class="mt-6 text-sm text-center text-gray-300">
          Acepto los <a href="#" class="underline">terminos</a> y
          <a href="#" class="underline">condiciones</a>
        </p>
      </div>

      <!-- Lado derecho con ancho total, previo flex padre -->
      <div class="flex-grow bg-white p-5 flex-col md:flex-row">

        <!-- 1 Nombre y Apellidos -->
        <div class="flex flex-col md:flex-row">

          <div class="flex-grow md:mr-2">
            <label class="text-sm font-semibold text-gray-500">Nombres</label>
            <input
                type="text"
                class="
                mt-0.5
                px-4
                py-2
                w-full
                transition
                duration-300
                border border-gray-300
                rounded
                focus:border-transparent
                focus:outline-none
                focus:ring-4 focus:ring-blue-200
              "
            />
          </div>
          <div class="flex-grow md:ml-2">
            <label class="text-sm font-semibold text-gray-500">Apellidos</label>
            <input
                type="text"
                class="
                  mt-0.5
                  px-4
                  py-2
                  w-full
                  transition
                  duration-300
                  border
                  border-gray-300
                  rounded
                  focus:border-transparent
                  focus:outline-none
                  focus:ring-4
                  focus:ring-blue-200"/>
          </div>

        </div>

        <!-- 2 Correo -->
        <div class="flex flex-grow flex-col mt-4">
          <label class="text-sm font-semibold text-gray-500">Correo</label>
          <input type="email" class="
            mt-0.5 px-4 py-2
            text-gray-600
            w-full
            border border-gray-300
            rounded
            focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"/>
        </div>


        <!-- 3 Password -->
        <div class="flex flex-col md:flex-row mt-4">

          <div class="flex-grow md:mr-2">
            <label class="text-sm font-semibold text-gray-500">Contrasena</label>
            <input type="text" class="
              mt-0.5 px-4 py-2
              w-full
              transition duration-300
              border border-gray-300
              rounded
              focus:border-transparent
              focus:outline-none
              focus:ring-4 focus:ring-blue-200
              "/>
          </div>

          <div class="flex-grow md:ml-2">
            <label class="text-sm font-semibold text-gray-500">Re Contrasena</label>
            <input type="text" class="
              mt-0.5 px-4 py-2
              w-full
              border border-gray-300
              rounded
              focus:border-transparent
              focus:outline-none
              focus:ring-4 focus:ring-blue-200
              "/>
          </div>
        </div>

        <!-- 4 Ruc Empresa -->
        <div class="flex flex-col md:flex-row mt-4">

          <div class="md:w-44 md:mr-2">
            <label class="text-sm font-semibold text-gray-500">Ruc Empresa</label>
            <input type="text" class="
              mt-0.5 px-4 py-2
              w-full
              transition duration-300
              border border-gray-300
              rounded
              focus:border-transparent
              focus:outline-none
              focus:ring-4 focus:ring-blue-200
              "/>
          </div>

          <div class="flex-grow md:ml-2">
            <label class="text-sm font-semibold text-gray-500">Razon Empresa</label>
            <input type="text" class="
              mt-0.5 px-4 py-2
              w-full
              border border-gray-300
              rounded
              focus:border-transparent
              focus:outline-none
              focus:ring-4 focus:ring-blue-200
              "/>
          </div>
        </div>


        <!-- 5 Razon Social -->
        <div class="mt-4 flex flex-col">
          <label class="text-sm font-semibold text-gray-500 pb-1">Direccion Empresa</label>
          <input type="text" class="
            w-full
            px-4 py-2
            border border-gray-300 rounded
            focus:border-transparent
            focus:outline-none
            focus:ring-4 focus:ring-blue-200
            ">
        </div>

        <!-- 6 Button Registrar -->
        <div class="mt-5">
          <button type="submit" class="
            w-full
            px-4 py-2
            text-lg font-semibold text-white
            bg-blue-500
            rounded-md
            ">
            Registrarse
          </button>
        </div>

      </div>

    </div>
  </div>
</template>