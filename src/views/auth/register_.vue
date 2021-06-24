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

        <!-- Nombre y Apellidos -->
        <div class="
              flex
              flex-col
              md:flex-row
        ">
          <div class="flex-grow md:mr-2">
            <label class="text-sm font-semibold text-gray-500 pb-1">Nombres</label>
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

      </div>

    </div>
  </div>
</template>