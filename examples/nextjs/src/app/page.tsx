import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tailwind Squircle Plugin
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create beautiful squircle shapes using SVG clip paths and the
            superellipse algorithm. Perfect for modern UI designs that need
            something between squares and circles.
          </p>
        </header>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Installation</h2>
          <div className="bg-gray-900 text-gray-200 font-mono p-4 rounded-lg mb-4">
            npm install tailwind-squircle2
          </div>
          <p className="text-gray-600 mb-4">
            Then add the plugin to your{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">tailwind.config.js</code>:
          </p>
          <div className="bg-gray-900 text-gray-200 font-mono p-4 rounded-lg mb-4">
            {`module.exports = {
  content: ['./src/**/*.{html,js}'],
  plugins: [require('tailwind-squircle2')]
}`}
          </div>
          <p className="text-gray-600 mb-4">Build your CSS:</p>
          <div className="bg-gray-900 text-gray-200 font-mono p-4 rounded-lg">
            npx tailwindcss build -o styles.css
          </div>
        </section>

        {/* Basic Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Squircle Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Round Squircle */}
            <div className="text-center">
              <div className="squircle-round bg-gradient-to-br from-blue-400 to-blue-600 w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Round Squircle</h3>
              <p className="text-sm text-gray-600 mb-2">n = 3 (very rounded)</p>
              <div className="bg-gray-900 text-gray-200 font-mono text-xs p-2 rounded">
                &lt;div className=&quot;squircle-round bg-blue-500&quot;&gt;&lt;/div&gt;
              </div>
            </div>

            {/* Perfect Squircle */}
            <div className="text-center">
              <div className="squircle bg-gradient-to-br from-green-400 to-green-600 w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Perfect Squircle</h3>
              <p className="text-sm text-gray-600 mb-2">n = 4 (balanced)</p>
              <div className="bg-gray-900 text-gray-200 font-mono text-xs p-2 rounded">
                &lt;div className=&quot;squircle bg-green-500&quot;&gt;&lt;/div&gt;
              </div>
            </div>

            {/* Soft Squircle */}
            <div className="text-center">
              <div className="squircle-soft bg-gradient-to-br from-purple-400 to-purple-600 w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Soft Squircle</h3>
              <p className="text-sm text-gray-600 mb-2">n = 6 (softer corners)</p>
              <div className="bg-gray-900 text-gray-200 font-mono text-xs p-2 rounded">
                &lt;div className=&quot;squircle-soft bg-purple-500&quot;&gt;&lt;/div&gt;
              </div>
            </div>

            {/* Sharp Squircle */}
            <div className="text-center">
              <div className="squircle-sharp bg-gradient-to-br from-pink-400 to-pink-600 w-32 h-32 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Sharp Squircle</h3>
              <p className="text-sm text-gray-600 mb-2">n = 8 (more square-like)</p>
              <div className="bg-gray-900 text-gray-200 font-mono text-xs p-2 rounded">
                &lt;div className=&quot;squircle-sharp bg-pink-500&quot;&gt;&lt;/div&gt;
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Practical Examples
          </h2>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Card Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="squircle bg-white p-6 shadow-lg">
                <div className="w-12 h-12 squircle-soft bg-blue-100 mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance</h4>
                <p className="text-gray-600">
                  Lightning-fast rendering with optimized SVG clip paths.
                </p>
              </div>

              <div className="squircle bg-white p-6 shadow-lg">
                <div className="w-12 h-12 squircle-soft bg-green-100 mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Easy to Use</h4>
                <p className="text-gray-600">
                  Simple utility classes that work with any Tailwind setup.
                </p>
              </div>

              <div className="squircle bg-white p-6 shadow-lg">
                <div className="w-12 h-12 squircle-soft bg-purple-100 mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Responsive</h4>
                <p className="text-gray-600">
                  Works perfectly across all screen sizes and devices.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Button Styles</h3>
            <div className="flex flex-wrap gap-4">
              <button className="squircle bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-medium transition-colors">
                Primary Button
              </button>
              <button className="squircle-soft bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-medium transition-colors">
                Success Button
              </button>
              <button className="squircle-sharp bg-red-500 hover:bg-red-600 text-white px-6 py-3 font-medium transition-colors">
                Alert Button
              </button>
              <button className="squircle-round bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 font-medium transition-colors">
                Secondary
              </button>
            </div>
          </div>

          {/* Profile Images */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Profile Images</h3>
            <div className="flex gap-4 items-end">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                alt="Profile"
                width={64}
                height={64}
                className="squircle w-16 h-16 object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face"
                alt="Profile"
                width={80}
                height={80}
                className="squircle w-20 h-20 object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
                alt="Profile"
                width={96}
                height={96}
                className="squircle w-24 h-24 object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=112&h=112&fit=crop&crop=face"
                alt="Profile"
                width={112}
                height={112}
                className="squircle w-28 h-28 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Comparison with Standard Shapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-32 h-32 bg-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium">Square</h3>
              <p className="text-sm text-gray-600">Standard rectangle</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-orange-500 rounded-2xl mx-auto mb-4" />
              <h3 className="text-lg font-medium">Rounded Rectangle</h3>
              <p className="text-sm text-gray-600">Standard border-radius</p>
            </div>
            <div>
              <div className="squircle w-32 h-32 bg-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium">Squircle</h3>
              <p className="text-sm text-gray-600">Perfect balance</p>
            </div>
            <div>
              <div className="w-32 h-32 bg-purple-500 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-medium">Circle</h3>
              <p className="text-sm text-gray-600">Fully rounded</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t">
          <p className="text-gray-600">
            Made with ❤️ using the superellipse algorithm and SVG clip paths
          </p>
        </footer>
      </div>
    </div>
  );
}
