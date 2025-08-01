

function loading() {
  return (
       <div className="flex flex-col items-center space-y-6 justify-center">
        {/* Logo or Title */}
        <h1 className="text-4xl font-extrabold tracking-widest">MyApp</h1>

        {/* Spinner */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-t-white border-b-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full bg-gray-900" />
        </div>

        {/* Loading text */}
        <p className="text-sm text-gray-300 tracking-wide">Loading, please wait...</p>
      </div>
  )
}

export default loading