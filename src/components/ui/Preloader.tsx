import { useEffect, useState } from 'react'


const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader">
      <div className="spinner"></div>
      <br/><p className="loading-text">Загрузка...</p>
    </div>
  )
}

export default Preloader