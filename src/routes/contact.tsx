import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'

export default function ContactPage() {
  const [githubLink, setGithubLink] = useState('')
  const [fileName, setFileName] = useState('')
  const [summary, setSummary] = useState('Your summarized README will appear here.')

  const handleGithubLinkChange = (e) => {
    setGithubLink(e.target.value)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <Layout>
      <Article
        title="Contact"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">
              GitHub Link
            </label>
            <input
              type="text"
              id="githubLink"
              name="githubLink"
              value={githubLink}
              onChange={handleGithubLinkChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              placeholder="Enter your GitHub repository link"
            />
          </div>
          <div>
            <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">
              Upload README.md
            </label>
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              accept=".md"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-400 file:text-white hover:file:bg-primary-500"
            />
            {fileName && <p className="mt-2 text-sm text-gray-600">Uploaded file: {fileName}</p>}
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Summary</h2>
            <div className="mt-2 p-4 rounded-md border border-gray-300 bg-gray-50">
              {summary}
            </div>
          </div>
        </div>
      </Article>
    </Layout>
  )
}
