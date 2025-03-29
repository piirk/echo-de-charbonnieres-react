function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page non trouvée</p>
      <p className="text-gray-500 mt-2">
        La page que vous recherchez n'existe pas.
      </p>
    </div>
  )
}

export default NotFoundPage
