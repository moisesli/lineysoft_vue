<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="flex bg-white rounded-md shadow-lg overflow-hidden max lg:max-w-screen-md md:flex-row md:flex-1">

      <!-- Lado Izquierdo -->
      <div class="w-80 bg-blue-500 text-white px-4 py-6">
        <!-- Titulo-->
        <div class="my-3 text-4xl font-bold text-center">
          <a href="">LINEYSOFT</a>
        </div>
        <!-- Resumen -->
        <p class="mt-6 font-normal text-center text-gray-300">
          Somos una empresa especializada en facturacion electronica y dar
          soluciones de software para tu negocio o pequenia empresa.
        </p>
        <!-- Registrate -->
        <p class="flex flex-col items-center justify-center mt-10 text-center">
          <span>Ya tienes una cuenta?</span>
          <a href="/login" class="underline">Entrar ..!</a>
        </p>
        <!-- Terminos y condiciones -->
        <div class="mt-6 text-sm text-center text-gray-300">
          Acepto los <a href="#" class="underline">terminos</a> y
          <a href="#" class="underline">condiciones</a>
        </div>
      </div>

      <!-- Lado Derecho -->
      <div class="p-5 bg-white">
        <!-- Titulo -->
        <h3 class="my-4 text-4xl font-semibold text-gray-700">Registrate</h3>
        <form action="flex flex-col">
          <!-- Apellidos -->
          <div class="flex flex-col">
            <label class="text-sm font-semibold text-gray-500">Apellidos</label>
            <input type="text" class="px-4 py-2 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>