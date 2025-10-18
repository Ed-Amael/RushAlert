export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your demo request has been submitted successfully. We'll get back to you within 24 hours.
        </p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}