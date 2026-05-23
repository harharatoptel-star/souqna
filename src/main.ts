import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div dir="rtl" class="min-h-screen bg-gray-50 flex-col items-center justify-center p-4 text-center">
    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">أهلاً بك في سوقنا</h1>
    <p class="text-base md:text-lg text-gray-600">Tailwind + RTL شغال تمام</p>
    <button class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
      ابدأ التسوق
    </button>
  </div>
`