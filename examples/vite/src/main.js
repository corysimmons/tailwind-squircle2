import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Tailwind Squircle Plugin
        </h1>
        <p class="text-xl text-gray-600 mb-4">
          Beautiful superellipse shapes for modern web interfaces
        </p>
        <p class="text-gray-500">Vite + Vanilla JavaScript Example</p>
      </header>

      <!-- Squircle Variations -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Squircle Variations
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="squircle-round bg-gradient-to-br from-pink-400 to-red-500 w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">squircle-round</h3>
            <p class="text-gray-600 text-sm">Very rounded (n=3)</p>
          </div>
          <div class="text-center">
            <div class="squircle bg-gradient-to-br from-blue-400 to-purple-500 w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">squircle</h3>
            <p class="text-gray-600 text-sm">Perfect balance (n=4)</p>
          </div>
          <div class="text-center">
            <div class="squircle-soft bg-gradient-to-br from-green-400 to-teal-500 w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">squircle-soft</h3>
            <p class="text-gray-600 text-sm">Softer corners (n=6)</p>
          </div>
          <div class="text-center">
            <div class="squircle-sharp bg-gradient-to-br from-yellow-400 to-orange-500 w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">squircle-sharp</h3>
            <p class="text-gray-600 text-sm">More square-like (n=8)</p>
          </div>
        </div>
      </section>

      <!-- Card Examples -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Card Components
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="squircle bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Perfect Squircle</h3>
            <p class="text-gray-600 text-sm mb-4">
              A card with the perfect balance between square and circle.
            </p>
            <button class="squircle-round bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
          
          <div class="squircle-soft bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Soft Corners</h3>
            <p class="text-gray-600 text-sm mb-4">
              Softer, more approachable design with gentle curves.
            </p>
            <button class="squircle bg-green-500 text-white px-4 py-2 text-sm font-medium hover:bg-green-600 transition-colors">
              Explore
            </button>
          </div>
          
          <div class="squircle-round bg-white p-6 shadow-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Very Rounded</h3>
            <p class="text-gray-600 text-sm mb-4">
              Close to circular but maintaining structure.
            </p>
            <button class="squircle-sharp bg-purple-500 text-white px-4 py-2 text-sm font-medium hover:bg-purple-600 transition-colors">
              Discover
            </button>
          </div>
        </div>
      </section>

      <!-- Profile Images -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Profile Images
        </h2>
        <div class="flex justify-center space-x-8">
          <div class="text-center">
            <div class="squircle bg-gradient-to-br from-indigo-400 to-purple-500 w-20 h-20 mx-auto mb-2 flex items-center justify-center text-white font-bold text-2xl">
              JD
            </div>
            <p class="text-gray-600 text-sm">John Doe</p>
          </div>
          <div class="text-center">
            <div class="squircle-round bg-gradient-to-br from-pink-400 to-red-500 w-20 h-20 mx-auto mb-2 flex items-center justify-center text-white font-bold text-2xl">
              SM
            </div>
            <p class="text-gray-600 text-sm">Sarah Miller</p>
          </div>
          <div class="text-center">
            <div class="squircle-soft bg-gradient-to-br from-green-400 to-blue-500 w-20 h-20 mx-auto mb-2 flex items-center justify-center text-white font-bold text-2xl">
              AB
            </div>
            <p class="text-gray-600 text-sm">Alex Brown</p>
          </div>
        </div>
      </section>

      <!-- Shape Comparison -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Shape Comparison
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-blue-500 w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">Square</h3>
            <p class="text-gray-600 text-sm">Sharp corners</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-500 rounded-lg w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">Rounded</h3>
            <p class="text-gray-600 text-sm">Standard border-radius</p>
          </div>
          <div class="text-center">
            <div class="squircle bg-blue-500 w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">Squircle</h3>
            <p class="text-gray-600 text-sm">Superellipse shape</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-500 rounded-full w-24 h-24 mx-auto mb-4"></div>
            <h3 class="font-semibold text-gray-800">Circle</h3>
            <p class="text-gray-600 text-sm">Fully rounded</p>
          </div>
        </div>
      </section>

      <!-- Usage Examples -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Interactive Elements
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="squircle bg-blue-500 text-white px-6 py-3 font-medium hover:bg-blue-600 transition-colors">
            Primary Button
          </button>
          <button class="squircle-round bg-green-500 text-white px-6 py-3 font-medium hover:bg-green-600 transition-colors">
            Rounded Button
          </button>
          <button class="squircle-soft bg-purple-500 text-white px-6 py-3 font-medium hover:bg-purple-600 transition-colors">
            Soft Button
          </button>
          <button class="squircle-sharp bg-red-500 text-white px-6 py-3 font-medium hover:bg-red-600 transition-colors">
            Sharp Button
          </button>
        </div>
      </section>

      <footer class="text-center text-gray-500">
        <p>Built with Vite + Tailwind CSS + Squircle Plugin</p>
        <p class="mt-2">
          <a href="https://github.com/corysimmons/tailwind-squircle2" 
             class="text-blue-500 hover:text-blue-600" 
             target="_blank">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  </div>
`
