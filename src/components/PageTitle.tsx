import { useEffect } from 'react'

interface PageTitleProps {
  title: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = `L'Écho de Charbonnières | ${title}`
  }, [title])

  return null
}

export default PageTitle
