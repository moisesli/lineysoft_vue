<template>
  <div class="flex md:min-h-screen items-center justify-center bg-gray-100">
    <!-- maximo ancho 768 y ancho total con flex-grow -->
    <div
        class="
        flex
        flex-col
        md:flex-row
        lg:max-w-screen-md
        bg-gray-300
        flex-grow
        rounded-md
        overflow-hidden
        shadow-lg">

      <!-- Lado Izquierdo -->
      <div class="bg-blue-500 md:w-80 py-6 px-4 text-white md:flex-shrink-0">
        lefttdsadasd
      </div>

      <!-- Lado derecho con ancho total, previo flex padre -->
      <div
          class="
            flex-grow
            bg-white
            p-5
            flex-col
            md:flex-row
      ">

        <!-- 1 Nombre y Apellidos -->
        <div class="
              flex
              flex-col
              md:flex-row">
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
        <div class="flex flex-grow flex-col mt-3">
          <label class="text-sm font-semibold text-gray-500">Correo</label>
          <input type="email" class="
            mt-0.5 px-4 py-2
            text-gray-600
            w-full
            border border-gray-300
            rounded
            focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
        </div>


        <!-- 3 Password -->
        <div class="flex flex-col md:flex-row mt-3">
          <div class="flex-grow md:mr-2">
            <label class="text-sm font-semibold text-gray-500">Contrasena</label>
          </div>
          <div class="flex-grow md:ml-2">
            <label class="">Re Contrasena</label>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>